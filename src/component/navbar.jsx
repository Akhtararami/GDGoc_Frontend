import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.svg";
import logoName from "../assets/logo-name.svg";
import arrow from "../assets/arrow.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <img src={logoName} alt="Logo Name" />
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/overview">Overview</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="navbar-button">
        <NavLink to="/overview">
          <button>Find your track<img src={arrow} alt="Arrow" /></button>
        </NavLink>
      </div>
    </nav>
  );
}   
export default Navbar;
