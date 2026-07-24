import React from "react";
import PhilosophyPartnersPage from "./sections/philosophy/PhilosophyPartnersPage";
import HeroPartnersPage from "./sections/hero/HeroPartnersPage";
import CraftsmanshipPartnersPage from "./sections/craftmenship/CraftsmanshipPartnersPage";
import PartnersPartnersPage from "./sections/partners/PartnersPartnersPage";
import ActionPartnersPage from "./sections/action/ActionPartnersPage";

import "./Partners.css";

const Partners = () => {
  return (
    <>
      <HeroPartnersPage />
      <PhilosophyPartnersPage />
      <CraftsmanshipPartnersPage />
      {/* 
      
      <PartnersPartnersPage />
      <ActionPartnersPage /> */}
    </>
  );
};

export default Partners;
