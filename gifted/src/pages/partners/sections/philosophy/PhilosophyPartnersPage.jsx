import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

import "./PhilosophyPartnersPage.css";

const PhilosophyPartnersPage = () => {
  const { t } = useLanguage();
  const s = t.partners.philosophy;
  return (
    <div className="philosophy-partners-section">
      <div className="philosophy-partners-section__content">
        <div className="philosophy-partners-section__text-group">
          <h2 className="philosophy-partners-section__title">
            {s.title}{" "}
            <span className="philosophy-partners-section__title-highlight">
              {s.highlight}
            </span>
          </h2>
          <div className="philosophy-partners-section__texts">
            <p className="philosophy-partners-section__text">{s.p1}</p>
            <p className="philosophy-partners-section__text">{s.p2}</p>
          </div>
          <div className="philosophy-partners-section__subtitle">
            {s.subtitle}
          </div>
        </div>
        <div className="philosophy-partners-section__principles">
          <div className="philosophy-partners-section__principle-card principle-card-1">
            <div className="philosophy-partners-section__flip-inner">
              <div className="philosophy-partners-section__flip-front">
                <div className="philosophy-partners-section__principle-number philosophy-partners-section__principle-number-1">
                  01
                </div>
                <div className="philosophy-partners-section__principle-title">
                  {s.principles.one.title}
                </div>
              </div>
              <div className="philosophy-partners-section__flip-back">
                <div className="philosophy-partners-section__principle-hover-text">
                  {s.principles.one.hover}
                </div>
              </div>
            </div>
          </div>
          <div className="philosophy-partners-section__principle-card principle-card-2">
            <div className="philosophy-partners-section__flip-inner">
              <div className="philosophy-partners-section__flip-front">
                <div className="philosophy-partners-section__principle-number philosophy-partners-section__principle-number-2">
                  02
                </div>
                <div className="philosophy-partners-section__principle-title">
                  {s.principles.two.title}
                </div>
              </div>
              <div className="philosophy-partners-section__flip-back">
                <div className="philosophy-partners-section__principle-hover-text">
                  {s.principles.two.hover}
                </div>
              </div>
            </div>
          </div>
          <div className="philosophy-partners-section__principle-card principle-card-3">
            <div className="philosophy-partners-section__flip-inner">
              <div className="philosophy-partners-section__flip-front">
                <div className="philosophy-partners-section__principle-number philosophy-partners-section__principle-number-3">
                  03
                </div>
                <div className="philosophy-partners-section__principle-title">
                  {s.principles.three.title}
                </div>
              </div>
              <div className="philosophy-partners-section__flip-back">
                <div className="philosophy-partners-section__principle-hover-text">
                  {s.principles.three.hover}
                </div>
              </div>
            </div>
          </div>
          <div className="philosophy-partners-section__principle-card principle-card-4">
            <div className="philosophy-partners-section__flip-inner">
              <div className="philosophy-partners-section__flip-front">
                <div className="philosophy-partners-section__principle-number philosophy-partners-section__principle-number-4">
                  04
                </div>
                <div className="philosophy-partners-section__principle-title">
                  {s.principles.four.title}
                </div>
              </div>
              <div className="philosophy-partners-section__flip-back">
                <div className="philosophy-partners-section__principle-hover-text">
                  {s.principles.four.hover}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyPartnersPage;
