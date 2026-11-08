import React from "react";
import Title from "../title";
import arrow from "./../../assets/arrow.svg";
import "../../App.css";

function CtaBanner({
    buttonText = "Explore the overview",
    buttonLink = "/overview"
}) {
    return (
        <section className="cta-wrapper">
            <div className="cta-banner">
                <div className="cta-left">
                    <Title
                        info="YOUR NEXT CHAPTER"
                        title={
                            <>
                                Bring your curiosity. <br />
                                We’ll build from there.
                            </>
                        }
                        description={
                            <p>Find a learning track, meet a collaborator, or start a conversation.</p>
                        }
                    />
                </div>

                <div className="cta-right">
                    <a href={buttonLink} className="cta-button">
                        {buttonText}
                        <img src={arrow} alt="" />
                    </a>
                    <a href="/contact" className="cta-link">
                        Talk to the community
                        <span className="arrow-icon" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CtaBanner;
