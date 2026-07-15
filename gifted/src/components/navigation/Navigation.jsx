import React from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

import "./Navigation.css";

const Navigation = () => {
  const { t } = useLanguage();
  const s = t.header.nav;

  const linkClass = ({ isActive }) =>
    `header-navigation__link${isActive ? " is-active" : ""}`;

  return (
    <ul className="header-navigation">
      <NavLink to="/about" className={linkClass}>
        <li className="header-navigation__item">{s.about}</li>
      </NavLink>
      <NavLink to="/corporate" className={linkClass}>
        <li className="header-navigation__item">{s.corporate}</li>
      </NavLink>
      <NavLink to="/partners" className={linkClass}>
        <li className="header-navigation__item">{s.partners}</li>
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        <li className="header-navigation__item">{s.contact}</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;