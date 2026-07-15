import { createContext, useContext, useEffect, useState } from 'react';
import en from '../locales/en'
import fi from '../locales/fi'
import se from '../locales/se'

const locales = { en, fi, se };

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [t, setT] = useState(locales[language]);

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setT(locales[language])
  }, [language])


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);