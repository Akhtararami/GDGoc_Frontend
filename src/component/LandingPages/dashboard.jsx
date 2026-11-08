
import React from "react";
import "./../../App.css";
import arrow from "./../../assets/arrow.svg";

function Dashboard({
  image,
  title,
  titlebottom,
  info,
  infoIcon,
  description,
  button,
  buttonLink,
  little,
  littleImage
}) {
  return (
    <div className="dashboard">
      <div className="dashboard-left">

        <p className="info">
          {infoIcon && <img src={infoIcon} alt="" />}
          {info}
        </p>

        <h1 className="title">{title}</h1>
        <h1 className="titlebottom">{titlebottom}</h1>

        <p className="deskripsi-hero">
          {description}
        </p>

        <div className="button-container">
          <button className="button">
            {button}
            <span className="button-arrow"><img src={arrow} alt="" /></span>
          </button>

          <button className="button">
            {buttonLink}
            <span className="button-arrow"><img src={arrow} alt="" /></span>
          </button>
        </div>

        <p className="little">
          {littleImage && <img src={littleImage} alt="" />}
          {little}
        </p>

      </div>

      <div className="dashboard-right">
        <img src={image} alt="Dashboard Image" />
      </div>
    </div>
  );
}

export default Dashboard;
