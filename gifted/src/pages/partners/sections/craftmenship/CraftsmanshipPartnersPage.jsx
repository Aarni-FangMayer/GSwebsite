import React from 'react'
import { useLanguage } from "../../../../contexts/LanguageContext";

import './CraftsmanshipPartnersPage.css'

const CraftsmanshipPartnersPage = () => {
    const { t } = useLanguage();
    const s = t.partners.craftsmanship;
  return (
    <div>
      this is craftsmanship page
    </div>
  )
}

export default CraftsmanshipPartnersPage
