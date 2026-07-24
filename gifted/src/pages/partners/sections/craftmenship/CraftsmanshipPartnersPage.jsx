import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

import "./CraftsmanshipPartnersPage.css";
import ImageCircleOne from '../../../../assets/icons/hand.png'
import ImageCircleTwo from '../../../../assets/icons/leaf.png'
import ImageCircleThree from '../../../../assets/icons/design.png'
import ImageCircleFour from '../../../../assets/icons/brilliant.png'

const CraftsmanshipPartnersPage = () => {
  const { t } = useLanguage();
  const s = t.partners.craftsmanship;
  return (
    <div className="craftsmanship-partners-section">
      <div className="craftsmanship-partners-section__content">
        <div className="craftsmanship-partners-section__image"></div>
        <div className="craftsmanship-partners-section__text-group">
          <h2 className="craftsmanship-partners-section__title">
            {s.title}{" "}
            <span className="craftsmanship-partners-section__title-highlight">
              {s.highlight}
            </span>
          </h2>
          <div className="craftsmanship-partners-section__text">
            <p className="craftsmanship-partners-section__p">
              {s.textOne}{" "}
              <span className="craftsmanship-partners-section__p-highlight">
                {s.textHighlight}{" "}
              </span>
              <span className="craftsmanship-partners-section__p">
                {s.textTwo}
              </span>
            </p>
          </div>
          <div className="craftsmanship-partners-section__circles">
            <div className="craftsmanship-partners-section__circle-group">
              <div className="craftsmanship-partners-section__circle">
                <img src={ImageCircleOne} className="craftsmanship-partners-section__circle-image" alt="" />
              </div>
              <div className="craftsmanship-partners-section__circle-subtitle">
                {s.circles.one}
              </div>
            </div>
            <div className="craftsmanship-partners-section__circle-group">
              <div className="craftsmanship-partners-section__circle">
                <img src={ImageCircleTwo} className="craftsmanship-partners-section__circle-image" alt="" />
              </div>
              <div className="craftsmanship-partners-section__circle-subtitle">
                {s.circles.two}
              </div>
            </div>
            <div className="craftsmanship-partners-section__circle-group">
              <div className="craftsmanship-partners-section__circle">
                <img src={ImageCircleThree} className="craftsmanship-partners-section__circle-image" alt="" />
              </div>
              <div className="craftsmanship-partners-section__circle-subtitle">
                {s.circles.three}
              </div>
            </div>
            <div className="craftsmanship-partners-section__circle-group">
              <div className="craftsmanship-partners-section__circle">
                <img src={ImageCircleFour} className="craftsmanship-partners-section__circle-image" alt="" />
              </div>
              <div className="craftsmanship-partners-section__circle-subtitle">
                {s.circles.four}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftsmanshipPartnersPage;
