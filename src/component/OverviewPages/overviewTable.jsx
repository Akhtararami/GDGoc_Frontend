import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { getTracks } from "../../services/api";
import { ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";
import "./overview.css";

function OverviewTable() {
  // Mengambil data track dari API GET /tracks untuk mengisi tabel perbandingan
  const { data: rawTracks, loading, error, refetch } = useFetch(getTracks);

  const tracks = Array.isArray(rawTracks) ? rawTracks : [];

  return (
    <section className="overview-table-section" id="compare">
      <h2 className="overview-table-heading">
        From an interest to something you can show.
      </h2>

      {/* 1. Loading State */}
      {loading && (
        <div className="overview-table-card" style={{ padding: 32 }}>
          <div className="api-skeleton-line" style={{ width: "40%", height: 20, marginBottom: 20 }}></div>
          <div className="api-skeleton-line" style={{ width: "100%", height: 16, marginBottom: 12 }}></div>
          <div className="api-skeleton-line" style={{ width: "100%", height: 16, marginBottom: 12 }}></div>
          <div className="api-skeleton-line" style={{ width: "100%", height: 16 }}></div>
        </div>
      )}

      {/* 2. Error State */}
      {error && (
        <ErrorState
          title="Gagal memuat tabel perbandingan"
          message={error}
          onRetry={refetch}
        />
      )}

      {/* 3. Empty State */}
      {!loading && !error && tracks.length === 0 && (
        <EmptyState message="Belum ada data perbandingan track yang tersedia." />
      )}

      {/* 4. Success State */}
      {!loading && !error && tracks.length > 0 && (
        <div className="overview-table-card">
          <table className="overview-table">
            <thead>
              <tr>
                <th scope="col" className="col-track">The track</th>
                <th scope="col" className="col-explore">What you will explore</th>
                <th scope="col" className="col-outcome">A tangible outcome</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr key={track.id || track.name}>
                  <td className="cell-track">
                    <strong>{track.name}</strong>
                  </td>
                  <td className="cell-explore">
                    <span className="mobile-col-label">What you will explore: </span>
                    {Array.isArray(track.skills) ? track.skills.join(", ") : track.skills}
                  </td>
                  <td className="cell-outcome">
                    <span className="mobile-col-label">A tangible outcome: </span>
                    {track.what_you_do}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="overview-table-note">
        Tracks often overlap in practice. People rarely work on just one piece in isolation, and that’s where the best learning happens.
      </p>
    </section>
  );
}

export default OverviewTable;
