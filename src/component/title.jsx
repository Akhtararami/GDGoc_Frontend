
import React from "react";
import marker from "./../assets/marker.svg";
import "../App.css";

function Title({ title, info, description }) {
  return (
    <div className="title-container">
      <div className="title-top">
        <img src={marker} alt="" />
        <p className="info-title">{info}</p>
      </div>

      <h1 className="title-tittle">{title}</h1>

      <div className="description-tittle">
        {description}
      </div>
    </div>
  );
}

export default Title;
