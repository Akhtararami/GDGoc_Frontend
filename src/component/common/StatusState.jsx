
import React from "react";
import "../../App.css";

/**
 * ErrorState: Menampilkan pesan kesalahan dan tombol Coba Lagi.
 */
export function ErrorState({
    message,
    onRetry,
    title = "Tidak dapat memuat data",
}) {
    return (
        <div className="api-error-card" role="alert">
            <div
                className="api-error-icon shrink-0"
                aria-hidden="true"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>

            <div className="api-error-content min-w-0">
                <h4 className="api-error-title">{title}</h4>
                <p className="api-error-message">
                    {message ||
                        "Terjadi kendala saat menghubungkan ke server."}
                </p>
            </div>

            {onRetry && (
                <button
                    type="button"
                    className="api-retry-button"
                    onClick={onRetry}
                >
                    Coba lagi
                </button>
            )}
        </div>
    );
}

/**
 * EmptyState: Menampilkan pesan ketika data kosong.
 */
export function EmptyState({
    message = "Belum ada informasi yang tersedia saat ini.",
}) {
    return (
        <div className="api-empty-card">
            <div
                className="api-empty-icon shrink-0"
                aria-hidden="true"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                </svg>
            </div>

            <p className="api-empty-message min-w-0">
                {message}
            </p>
        </div>
    );
}

/**
 * LoadingSkeleton: Placeholder ketika data sedang dimuat.
 */
export function LoadingSkeleton({ count = 3, type = "card" }) {
    const items = Array.from({ length: count }, (_, i) => i);

    if (type === "track") {
        return (
            <div className="container-cardtrack w-full">
                {items.map((i) => (
                    <div
                        key={i}
                        className="track-card api-skeleton-track min-w-0"
                    >
                        <div className="track-card-image api-skeleton-box api-skeleton-image shrink-0" />

                        <div className="track-card-content min-w-0">
                            <div className="api-skeleton-line api-skeleton-label" />
                            <div className="api-skeleton-line api-skeleton-title" />
                            <div className="api-skeleton-line api-skeleton-desc" />
                            <div className="api-skeleton-line api-skeleton-desc-short" />
                            <div className="track-card-divider" />
                            <div className="api-skeleton-line api-skeleton-category" />
                            <div className="api-skeleton-line api-skeleton-link" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "faq") {
        return (
            <div className="faq-list w-full">
                {items.map((i) => (
                    <div key={i} className="faq-item api-skeleton-faq min-w-0">
                        <div className="api-skeleton-line api-skeleton-title" />
                    </div>
                ))}
            </div>
        );
    }

    if (type === "steps") {
        return (
            <div className="steps-grid w-full">
                {items.map((i) => (
                    <div key={i} className="step-item api-skeleton-step min-w-0">
                        <div className="api-skeleton-line api-skeleton-number" />
                        <div className="step-divider" />
                        <div className="api-skeleton-line api-skeleton-title" />
                        <div className="api-skeleton-line api-skeleton-desc" />
                    </div>
                ))}
            </div>
        );
    }

    if (type === "learning") {
        return (
            <div className="learning-grid w-full">
                {items.map((i) => (
                    <div
                        key={i}
                        className="learning-card api-skeleton-learning min-w-0"
                    >
                        <div className="api-skeleton-box api-skeleton-icon shrink-0" />
                        <div className="api-skeleton-line api-skeleton-title" />
                        <div className="api-skeleton-line api-skeleton-desc" />
                        <div className="learning-card-divider" />
                        <div className="api-skeleton-line api-skeleton-category" />
                    </div>
                ))}
            </div>
        );
    }

    // Default card skeleton
    return (
        <div className="api-skeleton-generic-grid w-full">
            {items.map((i) => (
                <div key={i} className="api-skeleton-card min-w-0">
                    <div className="api-skeleton-line api-skeleton-title" />
                    <div className="api-skeleton-line api-skeleton-desc" />
                    <div className="api-skeleton-line api-skeleton-desc-short" />
                </div>
            ))}
        </div>
    );
}
