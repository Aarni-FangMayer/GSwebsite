import React, { useEffect, useRef, useState } from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import './AboutHomeSection.css'
import ExclusiveImage from '../../../../assets/icons/exclusive.png'
import PackagingImage from '../../../../assets/icons/packaging.png'
import CustomImage from '../../../../assets/icons/custom.png'
import EcoImage from '../../../../assets/icons/eco.png'

const AboutHomeSection = () => {
  const { t } = useLanguage();
  const s = t.home.about;

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // анимация проигрывается один раз
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    { image: ExclusiveImage, alt: "Exclusive Products", data: s.cards.exclusive },
    { image: PackagingImage, alt: "Handcrafted Packaging", data: s.cards.packaging },
    { image: CustomImage, alt: "Custom Branding", data: s.cards.branding },
    { image: EcoImage, alt: "Eco-Conscious", data: s.cards.eco },
  ];

  return (
    <div className='about-home-section' ref={sectionRef}>
      <div className="about-home-section__content">
        <div
          className={`about-home-section__title-group${isVisible ? " is-visible" : ""}`}
        >
          <h2 className='about-home-section__title'>
            {s.title}{" "}
            <span className='about-home-section__title-hightlight'>{s.highlight}</span>
          </h2>
          <div className="about-home-section__subtitle subtitle">{s.subtitle}</div>
        </div>

        <div className="about-home-section__cards">
          {cards.map((card, index) => (
            <div
              key={card.alt}
              className={`about-home-section__card${isVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
            >
              <div className="about-home-section__card-icon">
                <img src={card.image} alt={card.alt} />
              </div>
              <h3 className='about-home-section__card-title'>{card.data.title}</h3>
              {card.data.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutHomeSection