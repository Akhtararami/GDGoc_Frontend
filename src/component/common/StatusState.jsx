import React from "react";
import "../../App.css";

/**
 * Komponen ErrorState: Menampilkan pesan kesalahan ramah pengguna dan tombol Coba Lagi
 */
export function ErrorState({ message, onRetry, title = "Tidak dapat memuat data" }) {
    return (
        <div className="api-error-card" role="alert">
            <div className="api-error-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>
            <div className="api-error-content">
                <h4 className="api-error-title">{title}</h4>
                <p className="api-error-message">{message || "Terjadi kendala saat menghubungkan ke server."}</p>
            </div>
            {onRetry && (
                <button type="button" className="api-retry-button" onClick={onRetry}>
                    Coba lagi
                </button>
            )}
        </div>
    );
}

/**
 * Komponen EmptyState: Menampilkan pesan saat data yang diterima kosong []
 */
export function EmptyState({ message = "Belum ada informasi yang tersedia saat ini." }) {
    return (
        <div className="api-empty-card">
            <div className="api-empty-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8" />
                </svg>
            </div>
            <p className="api-empty-message">{message}</p>
        </div>
    );
}

/**
 * Komponen LoadingSkeleton: Placeholder saat data sedang dimuat agar layout tidak bergeser (zero layout shift)
 */
export function LoadingSkeleton({ count = 3, type = "card" }) {
    const items = Array.from({ length: count }, (_, i) => i);

    if (type === "track") {
        return (
            <div className="container-cardtrack">
                {items.map((i) => (
                    <div key={i} className="track-card api-skeleton-track">
                        <div className="track-card-image api-skeleton-box api-skeleton-image"></div>
                        <div className="track-card-content">
                            <div className="api-skeleton-line api-skeleton-label"></div>
                            <div className="api-skeleton-line api-skeleton-title"></div>
                            <div className="api-skeleton-line api-skeleton-desc"></div>
                            <div className="api-skeleton-line api-skeleton-desc-short"></div>
                            <div className="track-card-divider"></div>
                            <div className="api-skeleton-line api-skeleton-category"></div>
                            <div className="api-skeleton-line api-skeleton-link"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "faq") {
        return (
            <div className="faq-list">
                {items.map((i) => (
                    <div key={i} className="faq-item api-skeleton-faq">
                        <div className="api-skeleton-line api-skeleton-title"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "steps") {
        return (
            <div className="steps-grid">
                {items.map((i) => (
                    <div key={i} className="step-item api-skeleton-step">
                        <div className="api-skeleton-line api-skeleton-number"></div>
                        <div className="step-divider"></div>
                        <div className="api-skeleton-line api-skeleton-title"></div>
                        <div className="api-skeleton-line api-skeleton-desc"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === "learning") {
        return (
            <div className="learning-grid">
                {items.map((i) => (
                    <div key={i} className="learning-card api-skeleton-learning">
                        <div className="api-skeleton-box api-skeleton-icon"></div>
                        <div className="api-skeleton-line api-skeleton-title"></div>
                        <div className="api-skeleton-line api-skeleton-desc"></div>
                        <div className="learning-card-divider"></div>
                        <div className="api-skeleton-line api-skeleton-category"></div>
                    </div>
                ))}
            </div>
        );
    }

    // Default card skeleton
    return (
        <div className="api-skeleton-generic-grid">
            {items.map((i) => (
                <div key={i} className="api-skeleton-card">
                    <div className="api-skeleton-line api-skeleton-title"></div>
                    <div className="api-skeleton-line api-skeleton-desc"></div>
                    <div className="api-skeleton-line api-skeleton-desc-short"></div>
                </div>
            ))}
        </div>
    );
}
