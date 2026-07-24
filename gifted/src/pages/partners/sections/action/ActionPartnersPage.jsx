import React, { useState } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { NavLink } from "react-router-dom";

import Modal from "../../../../components/modal/Modal";

import "./ActionPartnersPage.css";

const ActionPartnersPage = () => {
  const { t } = useLanguage();
  const s = t.partners.cta;

  const [open, setOpen] = useState(false);
  return (
    <div>
      this is cta section
      <div className="form-home-section__buttons">
        <button
          className="form-home-section__button-open-modal"
          onClick={() => setOpen(true)}
        >
          {s.mainButton}
        </button>
        <NavLink to="/corporate">
          <button className="form-home-section__button-collections">
            {s.secondaryButton}
          </button>
        </NavLink>
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

export default ActionPartnersPage;
