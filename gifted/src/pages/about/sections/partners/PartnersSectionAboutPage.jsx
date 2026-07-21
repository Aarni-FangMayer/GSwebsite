import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { NavLink } from "react-router-dom";

import "./PartnersSectionAboutPage.css";
import PartnerLogoOne from "../../../../assets/icons/partner_one_logo.png";
import PartnerLogoTwo from "../../../../assets/icons/partner_two_logo.png";
import PartnerLogoThree from "../../../../assets/icons/partner_three_logo.png";

const PartnersSectionAboutPage = () => {
  const { t } = useLanguage();
  const s = t.about.partners;

  return (
    <div className="partners-about-section">
      <div className="partners-about-section__content">
        <div className="partners-about-section__title-group">
          <h2 className="partners-about-section__title">
            {s.title}{" "}
            <span className="partners-about-section__title-highlight">
              {s.highlight}
            </span>
          </h2>
          <div className="partners-about-section__subtitle subtitle">
            {s.subtitle}
          </div>
        </div>
        <div className="partners-about-section__parter-cards">
          <div className="partners-about-section__parter-card">
            <div className="partners-about-section__card-image">
              <img src={PartnerLogoOne} alt="partner logo image" />
            </div>
            <div className="partners-about-section__card-texts">
              <div className="partners-about-section__card-text">
                {s.cards.one.text}
              </div>
              <div className="partners-about-section__card-link">
                <a
                  href={s.cards.one.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.cards.one.website}
                </a>
              </div>
            </div>
          </div>
          <div className="partners-about-section__parter-card">
            <div className="partners-about-section__card-image">
              <img src={PartnerLogoTwo} alt="partner logo image" />
            </div>
            <div className="partners-about-section__card-texts">
              <div className="partners-about-section__card-text">
                {s.cards.two.text}
              </div>
              <div className="partners-about-section__card-link">
                <a
                  href={s.cards.two.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.cards.two.website}
                </a>
              </div>
            </div>
          </div>
          <div className="partners-about-section__parter-card">
            <div className="partners-about-section__card-image">
              <img src={PartnerLogoThree} alt="partner logo image" />
            </div>
            <div className="partners-about-section__card-texts">
              <div className="partners-about-section__card-text">
                {s.cards.three.text}
              </div>
              <div className="partners-about-section__card-link">
                <a
                  href={s.cards.three.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.cards.three.website}
                </a>
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/partners" className="partners-about-section__btn-wrapper">
          <button className="partners-about-section__btn">
            {s.btn}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PartnersSectionAboutPage;
