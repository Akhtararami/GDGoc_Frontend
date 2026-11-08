import React from "react";
import Title from "../title";
import "../../App.css";
import "./overview.css";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Explore topics across the tracks and find what catches your curiosity."
  },
  {
    number: "02",
    title: "Practice",
    description: "Try hands-on exercises in workshops and study groups with guidance and peers."
  },
  {
    number: "03",
    title: "Build",
    description: "Apply what you know to small projects and real-world campus experiments."
  },
  {
    number: "04",
    title: "Share",
    description: "Showcase what you built, gather feedback, and pass your learnings on."
  }
];

function OverviewJourney() {
  return (
    <section className="overview-journey-section" id="journey">
      <Title
        info="THE LEARNING JOURNEY"
        title="A journey you can keep building on."
      />

      <div className="overview-steps-grid">
        {steps.map((step) => (
          <div className="overview-step-item" key={step.number}>
            <span className="overview-step-number">{step.number}</span>
            <div className="overview-step-divider"></div>
            <h3 className="overview-step-title">{step.title}</h3>
            <p className="overview-step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OverviewJourney;
