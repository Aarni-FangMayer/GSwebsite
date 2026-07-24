import React from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import './HeroPartnersPage.css'

const HeroPartnersPage = () => {
    const { t } = useLanguage();
    const s = t.partners.hero;
  return (
    <div className="hero-partners-section">
      <div className="hero-partners-section__content">
        <div className="hero-partners-section__content-text">
          <h1 className="hero-partners-section__title">{s.title}{" "}<span className="hero-partners-section__title-highlight">{s.highlight}</span></h1>
          <div className="hero-partners-section__subtitle subtitle">{s.subtitle}</div>
        </div>
      </div>
    </div>
  )
}

export default HeroPartnersPage
