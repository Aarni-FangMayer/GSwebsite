import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

import Navigation from "../../components/navigation/Navigation";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";

import "./Header.css";

function Header() {
  const { t } = useLanguage();
  const s = t.header;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      // не скрываем хедер, пока открыто мобильное меню
      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // блокируем скролл body при открытом мобильном меню
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`header-block${isHidden ? " header-block--hidden" : ""}${
          isScrolled ? " header-block--scrolled" : ""
        }`}
      >
        <div className="header-block__content">
          <div className="header-block__link">
            <NavLink to="/home" onClick={closeMenu}>
              <div className="header-block__logo">
                GIFTED{" "}
                <span className="header-block__logo-highlight">STUDIO</span>
              </div>
            </NavLink>
          </div>

          <div className="header-block__navigation">
            <Navigation />
          </div>

          <div className="header-block__link-btn">
            <LanguageSwitcher />
            <NavLink to="/shop">
              <button className="header-block__cta">
                {s.btn.regular}{" "}
                <span className="header-block__cta-highlight">
                  {s.btn.highlight}
                </span>
              </button>
            </NavLink>
          </div>

          <button
            type="button"
            className={`header-block__burger${
              isMenuOpen ? " is-active" : ""
            }`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`header-block__mobile-menu${
            isMenuOpen ? " is-open" : ""
          }`}
        >
          <div className="header-block__mobile-nav" onClick={closeMenu}>
            <Navigation />
          </div>

          <div className="header-block__mobile-actions">
            <LanguageSwitcher />
            <NavLink to="/shop" onClick={closeMenu}>
              <button className="header-block__cta">
                {s.btn.regular}{" "}
                <span className="header-block__cta-highlight">
                  {s.btn.highlight}
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className={`header-block__overlay${isMenuOpen ? " is-open" : ""}`}
        onClick={closeMenu}
      />
    </>
  );
}

export default Header;