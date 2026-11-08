import React from "react";
import Title from "../title";
import TrackCard from "./Trackcard";
import { useFetch } from "../../hooks/useFetch";
import { getTracks } from "../../services/api";
import { mapTrackToCardProps } from "../../services/mappers";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";

function TrackDiscovery() {
    // Mengambil data track dari API endpoint GET /tracks
    const { data: rawTracks, loading, error, refetch } = useFetch(getTracks);

    // Transformasi data API ke props yang dibutuhkan TrackCard
    const tracks = Array.isArray(rawTracks) ? rawTracks.map(mapTrackToCardProps) : [];

    return (
        <div className="track-discovery" id="overview">
            <div className="track-title">
                <Title
                    info="Find your starting point"
                    title={
                        <>
                            Many interests. One shared <br />
                            journey.
                        </>
                    }
                    description={
                        <div className="trackDesc">
                            <p>
                                Follow what excites you. Explore a
                                track, then connect the dots with others.
                            </p>

                            <a href="/overview">
                                See the overview
                                <span className="arrow-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    }
                />
            </div>

            {/* 1. Loading State */}
            {loading && <LoadingSkeleton count={3} type="track" />}

            {/* 2. Error State dengan mekanisme Coba Lagi */}
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
                <section className="container-cardtrack">
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
                </section>
            )}
        </div>
    );
}

export default TrackDiscovery;
