import { useState, useRef, useEffect } from "react";

import "./LanguageSwitcher.css";
import { useLanguage } from "../../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const languages = [
    { code: "en", label: "EN" },
    { code: "fi", label: "FI" },
    { code: "se", label: "SE" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const ref = useRef(null);

  const setLanguage = useLanguage().setLanguage;


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (language) => {
    setSelected(language);
    setIsOpen(false);
    
    setLanguage(language.code)
  };

  return (
    <div className="language-select" ref={ref}>
      <button
        className="language-select__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected.label}</span>

        <svg
          className={`arrow ${isOpen ? "open" : ""}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={`language-select__menu ${isOpen ? "show" : ""}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-select__item ${
              selected.code === lang.code ? "active" : ""
            }`}
            onClick={() => handleSelect(lang)}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
