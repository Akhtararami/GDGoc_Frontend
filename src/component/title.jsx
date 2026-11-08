import React from "react";
import marker from "./../assets/marker.svg";
import "../App.css";

function Title({ title, info, description, className = "" }) {
  return (
    <div className={`title-container ${className}`}>
      <div className="title-top">
        <img src={marker} alt="" />
        <p className="info-title">{info}</p>
      </div>

      <h2 className="title-tittle">{title}</h2>

      <div className="description-tittle">
        {description}
      </div>
    </div>
  );
}

export default Title;
