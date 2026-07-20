import React from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import './QuoteSectionAboutPage.css'

const QuoteSectionAboutPage = () => {
  const { t } = useLanguage();
    const s = t.about.quote;
  return (
    <div className="quote-about-section">
      <div className="quote-about-section__content">
        <div className="quote-about-section__text">
          {s.text}{" "}
          <span className='quote-about-section__highlight'>{s.highlight}</span>
        </div>
      </div>
    </div>
  )
}

export default QuoteSectionAboutPage
