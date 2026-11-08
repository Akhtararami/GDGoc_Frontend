import React from "react";
import Title from "../title";
import { useFetch } from "../../hooks/useFetch";
import { getFormats } from "../../services/api";
import { mapFormatItem } from "../../services/mappers";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";
import "./overview.css";

function OverviewFormats() {
  // Mengambil data format kegiatan dari API GET /formats
  const { data: rawFormats, loading, error, refetch } = useFetch(getFormats);

  const formats = Array.isArray(rawFormats) ? rawFormats.map(mapFormatItem) : [];

  return (
    <section className="overview-formats-section" id="formats">
      <div className="section-inner">
        <Title
          info="FORMATS & SESSIONS"
          title={
            <>
              The format changes. The curiosity <br />
              stays.
            </>
          }
          description={
            <p>
              Different formats for different moments. From small group deep-dives to open community sharing.
            </p>
          }
        />

        {/* 1. Loading State */}
        {loading && <LoadingSkeleton count={4} type="learning" />}

        {/* 2. Error State */}
        {error && (
          <ErrorState
            title="Gagal memuat format kegiatan"
            message={error}
            onRetry={refetch}
          />
        )}

        {/* 3. Empty State */}
        {!loading && !error && formats.length === 0 && (
          <EmptyState message="Belum ada format kegiatan yang tersedia saat ini." />
        )}

        {/* 4. Success State */}
        {!loading && !error && formats.length > 0 && (
          <div className="formats-grid">
            {formats.map((item) => (
              <div className="format-card" key={item.id || item.title}>
                <div className={`format-card-icon-box ${item.themeClass}`}>
                  {item.icon}
                </div>

                <h3 className="format-card-title">{item.title}</h3>

                <p className="format-card-desc">{item.description}</p>

                <a href={item.linkUrl} className="format-card-link">
                  {item.linkText}
                  <span className="arrow-icon" aria-hidden="true"></span>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default OverviewFormats;
