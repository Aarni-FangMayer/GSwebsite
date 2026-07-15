import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();
  const s = t.footer;

  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            GIFTED <span className="footer__logo-highlight">STUDIO</span>
          </div>
          <p className="footer__description">{s.brand.description}</p>
        </div>

        {/* Column 1 — Studio */}
        <div className="footer__column">
          <h4 className="footer__heading">{s.columnStudio.title}</h4>
          <ul className="footer__list">
            <li>
              <NavLink to="/about">{s.columnStudio.about}</NavLink>
            </li>
            <li>
              <NavLink to="/packaging">{s.columnStudio.packaging}</NavLink>
            </li>
            <li>
              <NavLink to="/journal">{s.columnStudio.journal}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{s.columnStudio.contact}</NavLink>
            </li>
          </ul>
        </div>

        {/* Column 2 — Gifting + Socials */}
        <div className="footer__column">
          <h4 className="footer__heading">{s.columnGifting.title}</h4>
          <ul className="footer__list">
            <li>
              <NavLink to="/corporate">{s.columnGifting.corporate}</NavLink>
            </li>
            <li>
              <NavLink to="/events">{s.columnGifting.events}</NavLink>
            </li>
            <li>
              <NavLink to="/shop">{s.columnGifting.shop}</NavLink>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <rect
                  x="2.5"
                  y="2.5"
                  width="19"
                  height="19"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path
                  d="M16.5 3c.4 2 2 3.6 4 3.9v3c-1.5 0-2.9-.4-4-1.2v6.7A5.6 5.6 0 1 1 11 10v3.1a2.6 2.6 0 1 0 2.5 2.6V3h3z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                <rect
                  x="2.5"
                  y="2.5"
                  width="19"
                  height="19"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <line
                  x1="7"
                  y1="10"
                  x2="7"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="7" r="1" fill="currentColor" />
                <path
                  d="M11 17v-4.2c0-1.6 1-2.4 2.2-2.4 1.2 0 2.1.8 2.1 2.4V17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <line
                  x1="11"
                  y1="10"
                  x2="11"
                  y2="17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 3 — Language */}
        <div className="footer__column">
          <h4 className="footer__heading">{s.columnLanguage.title}</h4>
          <div className="footer__language">
            <LanguageSwitcher variant="list" />
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="footer__bottom">
        <p className="footer__copyright">{s.bottom.copyright}</p>

        <div className="footer__legal">
          <NavLink to="/privacy-policy">{s.bottom.privacy}</NavLink>
          <span className="footer__legal-dot">·</span>
          <NavLink to="/terms-of-service">{s.bottom.terms}</NavLink>
          <span className="footer__legal-dot">·</span>
          <NavLink to="/cookie-policy">{s.bottom.cookies}</NavLink>
        </div>

        <p className="footer__location">{s.bottom.location}</p>
      </div>
    </footer>
  );
};

export default Footer;