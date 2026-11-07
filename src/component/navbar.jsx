import react from "react";
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
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-button">
        <button>Find your track!<img src={arrow} alt="Arrow" /></button>
        
      </div>
    </nav>
  );
}   
export default Navbar;