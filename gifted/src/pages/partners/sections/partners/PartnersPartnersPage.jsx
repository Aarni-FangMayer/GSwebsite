import React from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import PartnerCard from './components/partner_card/PartnerCard';
import PartnerInfo from './components/partner_info/PartnerInfo';

import './PartnersPartnersPage.css'

const PartnersPartnersPage = () => {
    const { t } = useLanguage();
    const s = t.partners.partners;
  return (
    <div>
      this is partners section
      <PartnerCard partnerCardContent="content for partner card" />
      <PartnerInfo partnerInfoContent="the text content" />
    </div>
  )
}

export default PartnersPartnersPage
