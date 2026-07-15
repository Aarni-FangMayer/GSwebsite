import React, { useState }  from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

import Modal from "../../../../components/modal/Modal";

import "./HeroHomeSection.css";

const HeroHomeSection = () => {
  const { t } = useLanguage();
  const s = t.home.hero;

  const [open, setOpen] = useState(false);

  return (
    <div className="hero-home-section">
      <div className="hero-home-section__content">
        <div className="hero-home-section__content-text">
          <h1 className="hero-home-section__title">
            {s.title}{" "}
            <span className="hero-home-section__title-hightlight">
              {s.highlight}
            </span>
          </h1>
          <div className="hero-home-section__subtitle subtitle">{s.text}</div>
          <div className="hero-home-section__buttons">
            <button className="hero-home-section__request-button" onClick={() => setOpen(true)}>
              {s.mainButton}
            </button>
            <NavLink to="/corporate">
              <button className="hero-home-section__explore-button">
                {s.secondaryButton}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Модальное окно запроса консультации"
        width="600px"
      ></Modal>
    </div>
  );
};

export default HeroHomeSection;
