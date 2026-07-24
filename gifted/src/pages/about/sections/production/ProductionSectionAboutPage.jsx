import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

import "./ProductionSectionAboutPage.css";
import CardOneImage from "../../../../assets/img/production_one_img.jpg";
import CardTwoImage from "../../../../assets/img/production_two_img.jpg";

const ProductionSectionAboutPage = () => {
  const { t } = useLanguage();
  const s = t.about.production;

  return (
    <div className="production-about-section">
      <div className="production-about-section__content">
        <h2 className="production-about-section__title">
          {s.title}{" "}
          <span className="production-about-section__title-highlight">
            {s.highlight}
          </span>
        </h2>

        <div className="production-about-section__cards">
          <div className="production-about-section__cards-decor"></div>
          <div className="production-about-section__cards-cell-1">
            <div className="production-about-section__subtitle">
              {s.subtitle}
            </div>
            <div className="production-about-section__card">
              <div className="production-about-section__card-num">01</div>
              <div className="production-about-section__card-title">
                {s.stepOne.title}
              </div>
              <div className="production-about-section__card-text">
                {s.stepOne.text}
              </div>
            </div>
          </div>
          <div className="production-about-section__cards-cell-2 production-about-section__card-img-wrap">
            <div className="production-about-section__card-img-decor"></div>
            <div className="production-about-section__card-img production-about-section__card-img-2"></div>
          </div>
          <div className="production-about-section__cards-cell-3 production-about-section__card-img-wrap">
            <div className="production-about-section__card-img-decor"></div>
            <div className="production-about-section__card-img production-about-section__card-img-3"></div>
          </div>
          <div className="production-about-section__cards-cell-4">
            <div className="production-about-section__card">
              <div className="production-about-section__card-num">02</div>
              <div className="production-about-section__card-title">
                {s.stepTwo.title}
              </div>
              <div className="production-about-section__card-text">
                {s.stepTwo.text}
              </div>
            </div>
            <div className="production-about-section__afterthought">
              {s.afterthought}
            </div>
          </div>
        </div>
        <div className="production-about-section__cards-mobile">
          <div className="production-about-section__subtitle">{s.subtitle}</div>
          <div className="production-about-section__cards-content">
            <div className="production-about-section__card-1">
              <div className="mobile-card-content__grid-1">
                <div className="production-about-section__card-num">01</div>
                <div className="production-about-section__card-title">
                  {s.stepOne.title}
                </div>
                <div className="production-about-section__card-text">
                  {s.stepOne.text}
                </div>
              </div>
            </div>
            <div className="production-about-section__card-2"></div>
            <div className="production-about-section__card-3"></div>
            <div className="production-about-section__card-4">
              <div className="mobile-card-content__grid-4">
                <div className="production-about-section__card-num">02</div>
                <div className="production-about-section__card-title">
                  {s.stepTwo.title}
                </div>
                <div className="production-about-section__card-text">
                  {s.stepTwo.text}
                </div>
              </div>
            </div>
          </div>
          <div className="production-about-section__afterthought">
            {s.afterthought}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionSectionAboutPage;
