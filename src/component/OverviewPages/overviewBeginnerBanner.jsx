import React from "react";
import marker from "../../assets/marker.svg";
import "../../App.css";
import "./overview.css";

function OverviewBeginnerBanner() {
  return (
    <section className="beginner-banner-wrapper" id="beginners">
      <div className="section-inner beginner-banner-inner">
        <div className="beginner-banner-left">
          <div className="title-top">
            <img src={marker} alt="" />
            <p className="info-title">FOR TOTAL BEGINNERS</p>
          </div>

          <h2 className="beginner-banner-title">
            New to tech? <br />
            That’s a starting point, <br />
            too.
          </h2>
        </div>

        <div className="beginner-banner-right">
          <p className="beginner-banner-desc">
            You don’t need a finished portfolio or the perfect track chosen. Pick a topic you’re curious about. If you’re not sure, tell us what interests you and we can start a conversation.
          </p>

          <a href="/contact" className="beginner-banner-link">
            Ask about how to get started
            <span className="arrow-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default OverviewBeginnerBanner;
