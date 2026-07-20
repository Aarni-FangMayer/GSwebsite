import React, { useState } from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import './QuestionHomeSection.css'

const QuestionHomeSection = () => {
  const { t } = useLanguage();
  const s = t.home.questions;

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const questions = [
    s.questions.one,
    s.questions.two,
    s.questions.three,
    s.questions.four,
    s.questions.five,
  ];

  return (
    <div className='questions-home-section'>
      <div className="questions-home-section__content">
        <h2 className='questions-home-section__title'>{s.title}</h2>

        <div className="questions-home-section__accordion">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`questions-home-section__item${isOpen ? " is-open" : ""}`}
              >
                <button
                  className="questions-home-section__question"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="questions-home-section__icon">
                    <span className="questions-home-section__icon-line questions-home-section__icon-line--horizontal" />
                    <span className="questions-home-section__icon-line questions-home-section__icon-line--vertical" />
                  </span>
                </button>

                <div className="questions-home-section__answer-wrapper">
                  <div className="questions-home-section__answer">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default QuestionHomeSection