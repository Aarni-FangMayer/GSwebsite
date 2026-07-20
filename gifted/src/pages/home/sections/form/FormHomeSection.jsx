import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

import Modal from "../../../../components/modal/Modal";

import "./FormHomeSection.css";

const FormHomeSection = () => {
  const { t } = useLanguage();
  const s = t.home.touch;

  const [open, setOpen] = useState(false);
  return (
    <div className="form-home-section">
      <div className="form-home-section__content">
        <h2 className="form-home-section__title">{s.title}</h2>
        <div className="form-home-section__buttons">
          <button className="form-home-section__button-open-modal" onClick={() => setOpen(true)}>
            {s.mainButton}
          </button>
          <NavLink to="/corporate">
            <button className="form-home-section__button-collections">{s.secondaryButton}</button>
          </NavLink>
        </div>

      </div>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Настройки"
        width="600px"
      ></Modal>
    </div>
  );
};

export default FormHomeSection;
