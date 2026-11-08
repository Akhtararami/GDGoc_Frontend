import React from "react";
import Title from "../title";
import { useFetch } from "../../hooks/useFetch";
import { getJourney } from "../../services/api";
import { mapJourneyItem } from "../../services/mappers";
import { LoadingSkeleton, ErrorState, EmptyState } from "../common/StatusState";
import "../../App.css";
import "./overview.css";

function OverviewJourney() {
  // Mengambil data learning journey dari API GET /journey
  const { data: rawSteps, loading, error, refetch } = useFetch(getJourney);

  const steps = Array.isArray(rawSteps) ? rawSteps.map(mapJourneyItem) : [];

  return (
    <section className="overview-journey-section" id="journey">
      <Title
        info="THE LEARNING JOURNEY"
        title="A journey you can keep building on."
      />

      {/* 1. Loading State */}
      {loading && <LoadingSkeleton count={4} type="steps" />}

      {/* 2. Error State */}
      {error && (
        <ErrorState
          title="Gagal memuat learning journey"
          message={error}
          onRetry={refetch}
        />
      )}

      {/* 3. Empty State */}
      {!loading && !error && steps.length === 0 && (
        <EmptyState message="Belum ada tahapan journey yang tersedia saat ini." />
      )}

      {/* 4. Success State */}
      {!loading && !error && steps.length > 0 && (
        <div className="overview-steps-grid">
          {steps.map((step) => (
            <div className="overview-step-item" key={step.id || step.number}>
              <span className="overview-step-number">{step.number}</span>
              <div className="overview-step-divider"></div>
              <h3 className="overview-step-title">{step.title}</h3>
              <p className="overview-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default OverviewJourney;
