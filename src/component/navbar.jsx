import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.svg";
import logoName from "../assets/logo-name.svg";
import arrow from "../assets/arrow.svg";
import { useFetch } from "../hooks/useFetch";
import { getNavigation } from "../services/api";

function Navbar() {
  // Mengambil menu navigasi dinamis dari API GET /navigation
  const { data: navItems } = useFetch(getNavigation);

  const defaultLinks = [
    { label: "Home", href: "/" },
    { label: "Overview", href: "/overview" },
    { label: "Contact", href: "/contact" }
  ];

  // Gunakan data dari API, saring rute yang aktif di project
  const links = Array.isArray(navItems) && navItems.length > 0
    ? navItems.filter((item) => item.href !== "/about")
    : defaultLinks;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <img src={logoName} alt="Logo Name" />
      </div>
      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.href}>
            <NavLink to={link.href} end={link.href === "/"}>
              {link.label}
            </NavLink>
          </li>
        ))}
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
