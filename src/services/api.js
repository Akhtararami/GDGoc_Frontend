

export const API_BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

/**
 * Menggabungkan header default (Accept) dengan header dari pemanggil.
 * Header dari pemanggil menang jika namanya sama (case-insensitive).
 * @param {HeadersInit} [customHeaders]
 * @returns {Headers}
 */
function buildHeaders(customHeaders) {
    const headers = new Headers({ "Accept": "application/json" });
    new Headers(customHeaders).forEach((value, name) => headers.set(name, value));
    return headers;
}

/**
 * Melakukan satu request fetch dengan error handling standar.
 * @param {string} url - URL lengkap
 * @param {RequestInit} init - Opsi fetch lengkap (method, headers, body, signal, dll.)
 * @returns {Promise<any>} Data response JSON dari server
 */
async function request(url, init) {
    try {
        const response = await fetch(url, init);

        // Periksa apakah HTTP status berada dalam rentang 200-299
        if (!response.ok) {
            throw new Error(`Gagal memuat data (HTTP ${response.status}: ${response.statusText || "Terjadi kesalahan"})`);
        }

        const json = await response.json();

        // Validasi struktur standar API: { success: true, data: ... }
        if (json.success === false) {
            throw new Error(json.message || "Permintaan data ditolak oleh server.");
        }

        return json;
    } catch (error) {
        // Jika error disebabkan oleh pembatalan request (AbortController), teruskan agar bisa ditangani hook
        if (error.name === "AbortError") {
            throw error;
        }

        // Tampilkan pesan error yang informatif
        throw new Error(error.message || "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.");
    }
}

/**
 * Request GET yang sedang berjalan, dibagi ke semua pemanggil yang meminta request IDENTIK
 * (misal: OverviewTracks dan OverviewTable sama-sama memanggil /tracks).
 * Entri dihapus begitu request selesai, jadi ini BUKAN cache: panggilan berikutnya
 * setelah request selesai tetap mengambil data terbaru dari server.
 * Bentuk: kunci request -> { controller, refs, promise }
 */
const inflight = new Map();

function createAbortError() {
    return new DOMException("The operation was aborted.", "AbortError");
}

/**
 * Membuat kunci deduplikasi. Mengembalikan null jika request TIDAK boleh dibagi.
 *
 * Request hanya dibagi jika:
 * - method-nya GET dan tidak membawa body, dan
 * - seluruh opsi fetch selain `signal` bernilai primitif (string/number/boolean/null), sehingga
 *   bisa dibandingkan dengan pasti. Opsi non-primitif (objek, fungsi, dll.) tidak bisa dipastikan
 *   identik, maka request-nya tidak dibagi (tetap dikirim apa adanya).
 *
 * Kunci memuat URL, seluruh header efektif (sudah digabung dengan Accept, nama header
 * case-insensitive dan terurut), serta semua opsi lain (credentials, mode, cache, dst.).
 * Dua request yang berbeda di salah satu hal tersebut tidak akan pernah berbagi fetch.
 */
function getDedupKey(url, fetchOptions, headers) {
    const method = String(fetchOptions.method ?? "GET").toUpperCase();
    if (method !== "GET") return null;

    const entries = [];
    for (const [name, value] of Object.entries(fetchOptions)) {
        if (name === "method" || name === "headers" || value === undefined) continue;
        if (name === "body") {
            if (value === null) continue;
            return null; // GET dengan body: jangan dibagi, biarkan fetch yang menanganinya
        }
        const type = typeof value;
        if (value !== null && type !== "string" && type !== "number" && type !== "boolean") {
            return null;
        }
        entries.push([name, value]);
    }
    entries.sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));

    return JSON.stringify([url, [...headers.entries()], entries]);
}

/**
 * Helper internal untuk request ke API dengan error handling standar.
 * Mendukung seluruh opsi Fetch API (method, headers, body, credentials, dll.) seperti sebelumnya.
 *
 * Deduplikasi (hanya untuk request GET yang identik, lihat getDedupKey):
 * - Pemanggil dengan request identik saat request masih berjalan memakai satu fetch bersama.
 * - Setiap pemanggil tetap punya `signal` sendiri: jika ia membatalkan, promise miliknya
 *   langsung ditolak dengan AbortError (perilaku sama seperti fetch biasa).
 * - Fetch yang sebenarnya hanya dibatalkan jika SEMUA pemanggil sudah membatalkan,
 *   sehingga satu komponen yang unmount tidak membatalkan data yang masih dibutuhkan komponen lain.
 *
 * Request non-GET, atau yang tidak memenuhi syarat dibagi, dikirim langsung
 * dengan `signal` milik pemanggil tanpa deduplikasi.
 *
 * @param {string} endpoint - Path endpoint API (misal: '/tracks')
 * @param {RequestInit} [options] - Opsi fetch (method, headers, body, credentials, signal, dll.)
 * @returns {Promise<any>} Data response JSON dari server
 */
async function fetchAPI(endpoint, options = {}) {
    const { signal, ...fetchOptions } = options;
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = buildHeaders(fetchOptions.headers);
    const key = getDedupKey(url, fetchOptions, headers);

    // Tidak boleh dibagi (non-GET, ada body, atau opsi tidak dapat dibandingkan): kirim langsung
    if (key === null) {
        return request(url, { ...fetchOptions, headers, signal });
    }

    // Sama seperti fetch: signal yang sudah dibatalkan langsung ditolak
    if (signal?.aborted) {
        throw createAbortError();
    }

    let entry = inflight.get(key);
    if (!entry) {
        const controller = new AbortController();
        const created = {
            controller,
            refs: 0,
            promise: request(url, { ...fetchOptions, headers, signal: controller.signal }),
        };
        const release = () => {
            if (inflight.get(key) === created) inflight.delete(key);
        };
        created.promise.then(release, release);
        inflight.set(key, created);
        entry = created;
    }

    const shared = entry;
    shared.refs += 1;

    return new Promise((resolve, reject) => {
        const onAbort = () => {
            shared.refs -= 1;
            if (shared.refs === 0) {
                // Tidak ada lagi yang membutuhkan data ini: batalkan fetch yang sebenarnya
                if (inflight.get(key) === shared) inflight.delete(key);
                shared.controller.abort();
            }
            reject(createAbortError());
        };
        signal?.addEventListener("abort", onAbort, { once: true });

        shared.promise.then(
            (json) => {
                signal?.removeEventListener("abort", onAbort);
                resolve(json);
            },
            (error) => {
                signal?.removeEventListener("abort", onAbort);
                reject(error);
            },
        );
    });
}

/* ==========================================================================
   ENDPOINT FUNCTIONS
   ========================================================================== */

/**
 * Mengambil daftar track pembelajaran (Research & Discovery, Design, Development).
 * Endpoint: GET /tracks
 */
export async function getTracks(signal) {
    return fetchAPI("/tracks", { signal });
}

/**
 * Mengambil nilai-nilai inti komunitas (Stay curious, Make room, dll.).
 * Endpoint: GET /values
 */
export async function getValues(signal) {
    return fetchAPI("/values", { signal });
}

/**
 * Mengambil format kegiatan pembelajaran (Study groups, workshops, dll.).
 * Endpoint: GET /formats
 */
export async function getFormats(signal) {
    return fetchAPI("/formats", { signal });
}

/**
 * Mengambil tahapan learning journey (Discover, Practice, Build, Share).
 * Endpoint: GET /journey
 */
export async function getJourney(signal) {
    return fetchAPI("/journey", { signal });
}

/**
 * Mengambil peran keterlibatan anggota (Learner, Collaborator, Contributor).
 * Endpoint: GET /roles
 */
export async function getRoles(signal) {
    return fetchAPI("/roles", { signal });
}

/**
 * Mengambil kategori pesan formulir kontak dan teks panduan.
 * Endpoint: GET /inquiry-categories
 */
export async function getInquiryCategories(signal) {
    return fetchAPI("/inquiry-categories", { signal });
}

/**
 * Mengambil daftar pertanyaan umum (FAQ). Mendukung filter kategori opsional.
 * Endpoint: GET /faqs atau GET /faqs?category={category}
 */
export async function getFaqs(category, signal) {
    const endpoint = category ? `/faqs?category=${encodeURIComponent(category)}` : "/faqs";
    return fetchAPI(endpoint, { signal });
}

/**
 * Mengambil statistik komunitas (anggota, workshop, proyek, kontak sosmed).
 * Endpoint: GET /stats
 */
export async function getStats(signal) {
    return fetchAPI("/stats", { signal });
}

/**
 * Mengambil data menu navigasi utama.
 * Endpoint: GET /navigation
 */
export async function getNavigation(signal) {
    return fetchAPI("/navigation", { signal });
}