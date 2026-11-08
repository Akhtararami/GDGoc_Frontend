import React from "react";
import Title from "../title";
import { useFetch } from "../../hooks/useFetch";
import { getJourney } from "../../services/api";
import { mapJourneyItem } from "../../services/mappers";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";

function FirstSteps() {
    // Mengambil data alur belajar dari GET /journey
    const { data: rawSteps, loading, error, refetch } = useFetch(getJourney);

    const steps = Array.isArray(rawSteps) ? rawSteps.map(mapJourneyItem) : [];

    return (
        <section className="first-steps">
            <Title
                info="MAKE YOUR FIRST MOVE"
                title={
                    <>
                        You don’t need to have it all <br />
                        figured out.
                    </>
                }
            />

            {/* 1. Loading State */}
            {loading && <LoadingSkeleton count={3} type="steps" />}

            {/* 2. Error State */}
            {error && (
                <ErrorState
                    title="Gagal memuat langkah awal"
                    message={error}
                    onRetry={refetch}
                />
            )}

            {/* 3. Empty State */}
            {!loading && !error && steps.length === 0 && (
                <EmptyState message="Belum ada tahapan langkah yang tersedia saat ini." />
            )}

            {/* 4. Success State */}
            {!loading && !error && steps.length > 0 && (
                <div className="steps-grid">
                    {steps.map((step) => (
                        <div className="step-item" key={step.id || step.number}>
                            <span className="step-number">{step.number}</span>
                            <div className="step-divider"></div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default FirstSteps;
