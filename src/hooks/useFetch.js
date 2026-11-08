import { useState, useEffect, useCallback } from "react";

/**
 * Custom Hook: useFetch
 * 
 * Hook reusable untuk memanggil fungsi API service dengan otomatis mengelola
 * status loading, data hasil, error, dan pembersihan request saat unmount.
 * 
 * @param {Function} fetchFn - Fungsi service yang menerima `signal` dan mengembalikan Promise
 * @param {Array} [deps=[]] - Array dependensi tambahan jika ingin memicu fetch ulang saat nilai berubah
 * @returns {{ data: any, loading: boolean, error: string|null, refetch: Function }}
 */
export function useFetch(fetchFn, deps = []) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadCount, setReloadCount] = useState(0);

    const refetch = useCallback(() => {
        setReloadCount((c) => c + 1);
    }, []);

    useEffect(() => {
        // Buat AbortController untuk membatalkan request jika komponen unmount
        const controller = new AbortController();
        const signal = controller.signal;

        let isMounted = true;
        setLoading(true);
        setError(null);

        const executeFetch = async () => {
            try {
                const response = await fetchFn(signal);
                if (isMounted) {
                    // Jika response memiliki properti 'data', ambil 'data'. Jika tidak, gunakan response langsung.
                    const payload = response && response.data !== undefined ? response.data : response;
                    setData(payload);
                    setError(null);
                }
            } catch (err) {
                // Abaikan error pembatalan request (AbortError)
                if (err.name === "AbortError") {
                    return;
                }
                if (isMounted) {
                    setError(err.message || "Terjadi kesalahan saat mengambil data.");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        executeFetch();

        // Cleanup: batalkan request jika komponen di-unmount atau dependensi berubah
        return () => {
            isMounted = false;
            controller.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadCount, ...deps]);

    return { data, loading, error, refetch };
}

export default useFetch;
