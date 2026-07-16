import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import './StepsHomeSection.css'

const StepsHomeSection = () => {
  const { t } = useLanguage();
  const s = t.home.steps;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { number: "01", data: s.cards.one },
    { number: "02", data: s.cards.two },
    { number: "03", data: s.cards.three },
  ];

  return (
    <div className='steps-home-section' ref={sectionRef}>
      <div className="steps-home-section__content">
        <div className="steps-home-section__title-group">
          <h2 className='steps-home-section__title'>{s.title}</h2>
          <div className="steps-home-section__subtitle subtitle">{s.subtitle}</div>
        </div>
        <div className="steps-home-section__steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`steps-home-section__step-card${isVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="steps-home-section__step-card-number">{step.number}</div>
              <div className="steps-home-section__step-card-text-group">
                <h3 className="steps-home-section__step-card-title">{step.data.title}</h3>
                <div className="steps-home-section__step-card-text">{step.data.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepsHomeSection