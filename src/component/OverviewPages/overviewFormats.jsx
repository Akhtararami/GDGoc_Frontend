import React from "react";
import Title from "../title";
import "../../App.css";
import "./overview.css";

const formats = [
  {
    title: "Study groups",
    description: "Build foundations with peers. Work through a topic together, ask questions, and make steady progress week by week.",
    linkText: "Look into study groups",
    linkUrl: "#study-groups",
    themeClass: "format-theme-blue",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10" />
        <path d="M6 10h10" />
      </svg>
    )
  },
  {
    title: "Hands-on workshops",
    description: "Get hands-on with a new tool or method. Follow along with practical exercises and leave with something you built yourself.",
    linkText: "Explore upcoming workshops",
    linkUrl: "#workshops",
    themeClass: "format-theme-green",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: "Project circles",
    description: "Connect research, design, and development around real problems. Collaborate, iterate, and ship with peer feedback.",
    linkText: "Learn about project circles",
    linkUrl: "#project-circles",
    themeClass: "format-theme-yellow",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <path d="M16 4.7a3.5 3.5 0 0 1 0 6.6" />
        <path d="M18 14.3c2 .8 3.5 2.7 3.5 5.7" />
      </svg>
    )
  },
  {
    title: "Knowledge sharing",
    description: "Talk through your ideas, share a lesson from your project, and hear how others solved problems they ran into along the way.",
    linkText: "See sharing sessions",
    linkUrl: "#knowledge-sharing",
    themeClass: "format-theme-red",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12 3 1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3Z" />
      </svg>
    )
  }
];

function OverviewFormats() {
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

        <div className="formats-grid">
          {formats.map((item) => (
            <div className="format-card" key={item.title}>
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
      </div>
    </section>
  );
}

export default OverviewFormats;
