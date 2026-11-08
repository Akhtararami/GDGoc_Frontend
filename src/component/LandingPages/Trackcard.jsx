
import React from "react";
import "./../../App.css";

function TrackCard({
    image,
    label,
    title,
    description,
    category,
    link,
    bgColor
}) {
    return (
        <div className="track-card">

            <div className="track-card-image" style={{ backgroundColor: bgColor }}
            >
                <img src={image} alt={title} />
            </div>

            <div className="track-card-content">

                <span className="track-card-label">
                    {label}
                </span>

                <h3 className="track-card-title">
                    {title}
                </h3>

                <p className="track-card-description">
                    {description}
                </p>

                <div className="track-card-divider"></div>

                <span className="track-card-category">
                    {category}
                </span>

                <a href={link} className="track-card-link">
                    Explore this track
                    <span className="arrow-icon" aria-hidden="true"></span>
                </a>

            </div>
        </div>
    );
}

export default TrackCard;
