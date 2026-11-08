import React from "react";
import "./../../App.css";

function LearningCard({ icon, title, description, category }) {
    return (
        <div className="learning-card">
            <span className="learning-card-icon">
                {icon}
            </span>

            <h3 className="learning-card-title">
                {title}
            </h3>

            <p className="learning-card-description">
                {description}
            </p>

            <div className="learning-card-divider"></div>

            <span className="learning-card-category">
                {category}
            </span>
        </div>
    );
}

export default LearningCard;
