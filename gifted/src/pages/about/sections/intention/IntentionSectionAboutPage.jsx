import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { NavLink } from "react-router-dom";

import "./IntentionSectionAboutPage.css";

const IntentionSectionAboutPage = () => {
  const { t } = useLanguage();
  const s = t.about.intention;
  return (
    <div className="intention-about-section">
      <div className="intention-about-section__content">
        <h2 className="intention-about-section__title">
          {s.title}{" "}
          <span className="intention-about-section__title-highlight">
            {s.highlight}
          </span>
        </h2>
        <div className="intention-about-section__texts-group">
          <div className="intention-about-section__action-group">
            <NavLink
              to="/collections"
              className="intention-about-section__btn-wrapper"
            >
              <button className="intention-about-section__btn">
                {s.btn}
                <span className="intention-about-section__button-arrow">→</span>
              </button>
            </NavLink>
          </div>
          <div className="intention-about-section__text-group">
            <div className="intention-about-section__image"></div>
            <div className="intention-about-section__texts">
              <div className="intention-about-section__p subtitle">
                {s.p1}
              </div>
              <div className="intention-about-section__p subtitle">
                {s.p2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntentionSectionAboutPage;
