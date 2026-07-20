import React from "react";
import HeroHomeSection from "./sections/hero/HeroHomeSection";
import AboutHomeSection from "./sections/about/AboutHomeSection";
import CollectionsHomeSection from "./sections/collections/CollectionsHomeSection";
import StepsHomeSection from "./sections/steps/StepsHomeSection";
import QuestionHomeSection from "./sections/questions/QuestionHomeSection";
import FormHomeSection from "./sections/form/FormHomeSection";

const HomePage = () => {
  return (
    <>
      <HeroHomeSection />
      <AboutHomeSection />
      <CollectionsHomeSection />
      <StepsHomeSection />
      <QuestionHomeSection />
      <FormHomeSection />
    </>
  );
};

export default HomePage;
