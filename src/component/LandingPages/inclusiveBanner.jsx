import React from "react";
import star from "./../../assets/star.svg";
import "../../App.css";

function InclusiveBanner() {
    return (
        <section className="inclusive-banner">
            <div className="section-inner inclusive-banner-inner">
                <img src={star} alt="" className="inclusive-banner-star" />

                <div className="inclusive-banner-text">
                    <h2>
                        Different majors. Different starting points. <br />
                        A place for all of them.
                    </h2>
                    <p>
                        You don’t have to be the most experienced person in the room. Curiosity, kindness,
                        and a willingness to learn are a good place to start.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default InclusiveBanner;
