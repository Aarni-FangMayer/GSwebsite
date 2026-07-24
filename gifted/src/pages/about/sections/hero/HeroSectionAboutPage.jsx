import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

import "./HeroSectionAboutPage.css";

const HeroSectionAboutPage = () => {
  const { t } = useLanguage();
  const s = t.about.hero;

  return (
    <div className="hero-about-section">
      <div className="hero-about-section__content">
        <div className="hero-about-section__content-text">
          <h1 className="hero-about-section__title">{s.title}{" "}<span className="hero-about-section__title-highlight">{s.highlight}</span></h1>
          <div className="hero-about-section__subtitle subtitle">{s.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAboutPage;
