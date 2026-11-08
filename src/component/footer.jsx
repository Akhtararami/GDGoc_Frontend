import React from "react";
import "./footer.css";
import logo from "../assets/logo.svg";
import logoName from "../assets/logo-name.svg";
import { useFetch } from "../hooks/useFetch";
import { getStats } from "../services/api";

function Footer() {
  // Mengambil data statistik dan sosial media komunitas dari GET /stats
  const { data: stats } = useFetch(getStats);

  const instagramHandle = stats?.social?.instagram || "@gdgoc.ugm";
  const tagline = stats?.tagline || "Learn together. Build together.";
  const university = stats?.university || "Universitas Gadjah Mada";

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
              <img src={logoName} alt="Logo Name" />
            </div>
            <p>A student community for curious minds, shared learning, and technology with purpose.</p>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/overview">Overview</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Keep in the loop</h4>
            <a href={`https://www.instagram.com/${instagramHandle.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="footer-handle">
              {instagramHandle}
            </a>
            <div className="footer-social">
              <a href={`https://www.instagram.com/${instagramHandle.replace("@", "")}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="4" />
                  <path d="m10.5 9.2 4 2.8-4 2.8Z" />
                </svg>
              </a>
            </div>
            <p className="footer-tagline">{tagline}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© GDGoC {university} • 2026/2027</span>
          <span>Made for the campus. Open to possibilities.</span>
        </div>

        <div className="footer-colorbar">
          <i></i><i></i><i></i><i></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
