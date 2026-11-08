import React from "react";
import Title from "../title";
import "../../App.css";

function ProjectShowcase() {
    return (
        <section className="project-showcase">
            <div className="project-showcase-card">
                <div className="project-showcase-top">
                    <span>IDEA → PROTOTYPE</span>
                    <span className="project-showcase-code">&lt;/&gt;</span>
                </div>

                <div className="project-showcase-window">
                    <div className="project-showcase-dots">
                        <i className="dot-red"></i>
                        <i className="dot-yellow"></i>
                        <i className="dot-green"></i>
                    </div>

                    <h3>
                        A little less friction. <br />
                        A better campus day.
                    </h3>

                    <div className="project-showcase-pills">
                        <span className="pill-blue">Discover</span>
                        <span className="pill-green">Connect</span>
                        <span className="pill-red">Share</span>
                    </div>

                    <p>Start with a student need. Build a small, useful solution.</p>
                </div>

                <span className="project-showcase-note">
                    EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
                </span>
            </div>

            <div className="project-showcase-text">
                <Title
                    info="BUILD SOMETHING THAT MATTERS"
                    title={
                        <>
                            Your next project could <br />
                            start on campus.
                        </>
                    }
                    description={
                        <>
                            <p>
                                What if finding a study partner, sharing resources, or navigating campus
                                felt easier? Small, familiar problems can be the beginning of meaningful work.
                            </p>
                            <p>
                                Bring research, design, and development together. Try an idea, get feedback,
                                and make the next version better.
                            </p>
                            <a href="/tracks/projects">
                                Explore project-based learning
                                <span className="arrow-icon" aria-hidden="true"></span>
                            </a>
                        </>
                    }
                />
            </div>
        </section>
    );
}

export default ProjectShowcase;
