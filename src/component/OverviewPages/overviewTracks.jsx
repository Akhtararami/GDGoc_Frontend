import React from "react";
import Title from "../title";
import TrackCard from "../LandingPages/Trackcard";
import { useFetch } from "../../hooks/useFetch";
import { getTracks } from "../../services/api";
import { mapTrackToCardProps } from "../../services/mappers";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";
import "./overview.css";

function OverviewTracks() {
  // Mengambil data track dari API GET /tracks
  const { data: rawTracks, loading, error, refetch } = useFetch(getTracks);

  const tracks = Array.isArray(rawTracks) ? rawTracks.map(mapTrackToCardProps) : [];

  return (
    <section className="overview-tracks" id="tracks">
      <Title
        info="THREE LEARNING TRACKS"
        title={
          <>
            Three ways in. Plenty of ways <br />
            forward.
          </>
        }
        description={
          <p>
            Designed to stand alone or connect together. Follow what sparks your curiosity, then see how it connects with others.
          </p>
        }
      />

      {/* 1. Loading State */}
      {loading && <LoadingSkeleton count={3} type="track" />}

      {/* 2. Error State */}
      {error && (
        <ErrorState
          title="Gagal memuat learning tracks"
          message={error}
          onRetry={refetch}
        />
      )}

      {/* 3. Empty State */}
      {!loading && !error && tracks.length === 0 && (
        <EmptyState message="Belum ada track pembelajaran yang tersedia saat ini." />
      )}

      {/* 4. Success State */}
      {!loading && !error && tracks.length > 0 && (
        <div className="container-cardtrack">
          {tracks.map((track) => (
            <TrackCard
              key={track.id || track.title}
              image={track.image}
              label={track.label}
              title={track.title}
              description={track.description}
              category={track.category}
              link={track.link}
              bgColor={track.bgColor}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default OverviewTracks;
