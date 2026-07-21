import React from 'react'

import HeroSectionAboutPage from './sections/hero/HeroSectionAboutPage'
import QuoteSectionAboutPage from './sections/quote/QuoteSectionAboutPage'
import ProductionSectionAboutPage from './sections/production/ProductionSectionAboutPage'
import PartnersSectionAboutPage from './sections/partners/PartnersSectionAboutPage'
import IntentionSectionAboutPage from './sections/intention/IntentionSectionAboutPage'

import './AboutPage.css'

const AboutPage = () => {
  return (
    <>
      <HeroSectionAboutPage />
      <QuoteSectionAboutPage />
      <ProductionSectionAboutPage />
      {/* 
      
      <PartnersSectionAboutPage />
      <IntentionSectionAboutPage /> */}
    </>
  )
}

export default AboutPage
