import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../../contexts/LanguageContext";

import "./CollectionsHomeSection.css";
import ObjectOneImage from "../../../../assets/img/obj1.jpg";
import ObjectTwoImage from "../../../../assets/img/obj2.jpg";
import ObjectThreeImage from "../../../../assets/img/obj3.jpg";

const CollectionsHomeSection = () => {
  const { t } = useLanguage();
  const s = t.home.collections;

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

  const cardsData = [
    { image: ObjectOneImage, alt: "Object No.01", data: s.cards.one },
    { image: ObjectTwoImage, alt: "Object No.02", data: s.cards.two },
    { image: ObjectThreeImage, alt: "Object No.03", data: s.cards.three },
  ];

  return (
    <div className="collections-home-section" ref={sectionRef}>
      <div className="collections-home-section__content">
        <div className="collections-home-section__title-group">
          <h2 className="collections-home-section__title">
            {s.title}{" "}
            <span className="collections-home-section__title-hightlight">
              {s.highlight}
            </span>
          </h2>
          <NavLink
            to="/corporate"
            className="collections-home-section__button-wrapper collections-home-section__button-wrapper--desktop"
          >
            <button className="collections-home-section__button">
              {s.buttonExplore}
            </button>
          </NavLink>
        </div>

        <div className="collections-home-section__cards">
          {cardsData.map((card, index) => (
            <div
              key={card.alt}
              className={`collections-home-section__card${isVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
            >
              <img
                src={card.image}
                alt={card.alt}
                className="collections-home-section__card-image"
              />
              <div className="collections-home-section__card-text-content">
                <div className="collections-home-section__card-subtitle">
                  {card.data.number}
                </div>
                <h4 className="collections-home-section__card-title">
                  {card.data.title}
                </h4>
                <div className="collections-home-section__card-text">
                  {card.data.text}
                </div>
                <div className="collections-home-section__card-button">
                  {s.cards.btn}{" "}
                  <span className="collections-home-section__card-button-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <NavLink
          to="/corporate"
          className="collections-home-section__button-wrapper collections-home-section__button-wrapper--mobile"
        >
          <button className="collections-home-section__button">
            {s.buttonExplore}
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CollectionsHomeSection;