import { LanguageProvider } from "./contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./navigation/header/Header";
import Footer from "./navigation/footer/Footer";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage"
import CorporatePage from "./pages/corporate/CorporatePage"
import PartnersPage from "./pages/partners/Partners"
import ContactPage from "./pages/contact/Contact"
import ShopPage from "./pages/shop/ShopPage"
import "./App.css";

function App() {
  return (
    <>
      <LanguageProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LanguageProvider>
    </>
  );
}

export default App;
