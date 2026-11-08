/**
 * API Service - GDGoC UGM Frontend
 * 
 * Modul ini bertanggung jawab untuk melakukan komunikasi jaringan (HTTP request)
 * ke backend API GDGoC UGM menggunakan native Fetch API.
 * 
 * Base URL: https://gdgoc-ugm-api.vercel.app/api
 */

export const API_BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

/**
 * Helper internal untuk melakukan request fetch dengan error handling standar.
 * @param {string} endpoint - Path endpoint API (misal: '/tracks')
 * @param {RequestInit} [options] - Opsi fetch (method, headers, signal, dll.)
 * @returns {Promise<any>} Data response JSON dari server
 */
async function fetchAPI(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json",
                ...options.headers,
            },
            ...options,
        });

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
