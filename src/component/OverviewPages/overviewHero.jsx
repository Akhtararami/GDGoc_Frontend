import React from "react";
import marker from "../../assets/marker.svg";
import designThree from "../../assets/designthree.svg";
import "../../App.css";
import "./overview.css";

function OverviewHero() {
  return (
    <section className="overview-hero">
      <div className="section-inner overview-hero-inner">
        <div className="overview-hero-left">
          <div className="title-top">
            <img src={marker} alt="" />
            <p className="info-title">ALL TRACKS · ONE SHARED JOURNEY</p>
          </div>

          <h1 className="overview-hero-title">
            Find your spark. <br />
            <span className="overview-hero-highlight">Build your own path.</span>
          </h1>

          <p className="overview-hero-desc">
            Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.
          </p>
        </div>

        <div className="overview-hero-right">
          <div className="overview-hero-glow"></div>
          <img
            src={designThree}
            alt="Research and Discovery spark illustration"
            className="overview-hero-image"
          />
        </div>
      </div>

      <nav className="overview-jump-nav" aria-label="Page jump navigation">
        <div className="section-inner overview-jump-nav-inner">
          <a href="#tracks" className="overview-jump-link">
            <span>Learning tracks</span>
            <svg
              className="jump-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
          <a href="#compare" className="overview-jump-link">
            <span>Comparing tracks</span>
            <svg
              className="jump-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
          <a href="#formats" className="overview-jump-link">
            <span>Learning formats</span>
            <svg
              className="jump-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
          <a href="#journey" className="overview-jump-link">
            <span>First steps</span>
            <svg
              className="jump-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </nav>
    </section>
  );
}

export default OverviewHero;
