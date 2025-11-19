import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaCertificate, FaLeaf, FaHandshake } from "react-icons/fa";
import { useTranslation } from "../translations";

const Index = () => {
  const { t, language } = useTranslation(); // ✅ global translation context
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/PPT.jpg",
    "/images/fruitT.png",
    "/images/PetitPlaisir0.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === "fr" ? "Accueil - STA Sarl" : "Home - STA"}</title>
        <meta
          name="description"
          content="STA - Société de Transformation Alimentaire Sarl. Excellence dans la transformation de produits alimentaires de qualité."
        />
      </Helmet>

     {/* Fixed Social Media Icons */}
<div className="
  fixed z-50 flex gap-3 md:gap-4
  md:flex-col
  md:left-4 md:top-1/2 md:-translate-y-1/2
  bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0
  bg-white/80 md:bg-transparent rounded-full md:rounded-none px-4 py-2 md:px-0 md:py-0 shadow-md md:shadow-none
">
  <a href="https://www.facebook.com/share/16krEbxqqn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaFacebook className="text-base md:text-xl" />
  </a>
  <a href="https://www.instagram.com/peti_tplaisir1?igsh=bGpuNGFxMWRhdnlr&utm_source=qr" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaInstagram className="text-base md:text-xl" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaLinkedin className="text-base md:text-xl" />
  </a>
  <a href="https://www.tiktok.com/@petit_plaisir1?_t=ZM-8xWsRsVPz4a&_r=1" target="_blank" rel="noopener noreferrer"
    className="bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg w-9 h-9 md:w-12 md:h-12">
    <FaTiktok className="text-base md:text-xl" />
  </a>
</div>

      {/* Hero Section */}
     <section className="relative h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden pt-20">


        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {t.hero.welcome}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
              {t.hero.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-0.5 bg-orange-400"></span>
              <p className="text-lg font-medium">STA</p>
              <span className="w-12 h-0.5 bg-orange-400"></span>
            </div>
            <Link
              to="/brands"
              className="inline-block bg-green-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {language === "fr" ? "Découvrir Nos Produits" : "Discover Our Products"}
            </Link>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-orange-500" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-4xl font-bold text-gray-800 mb-8">
  {t.home.Welcome.title}
</h2>
<p className="text-lg text-gray-600 leading-relaxed">
  {t.home.Welcome.text}
</p>

          </div>
        </div>
      </section>
           {/* Our Brands Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      {t.brands.hero.title}
    </h2>
    <div className="grid md:grid-cols-2 gap-12">
      
      
    
      {/* Petit Plaisir */}
<div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-md mx-auto">
  <img
    src="/images/PP8.png"
    alt="Petit Plaisir"
    className="w-full h-64 object-cover"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      {t.brands.petitPlaisir.title}
    </h3>
    <p className="text-gray-600 mb-4">
      {t.brands.petitPlaisir.description}
    </p>
    <Link
      to="/brands#petitplaisir"
      className="inline-block bg-green-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
    >
      {language === "fr" ? "Explorer" : "Explore"}
    </Link>
  </div>
</div>

      
      {/* Fruitel */}
<div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform w-full max-w-md mx-auto">
  <img
    src="/images/fruity.png"
    alt="Fruitel"
    className="w-full h-64 object-cover"
  />
  <div className="p-6 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      {t.brands.fruitel.title}
    </h3>
    <p className="text-gray-600 mb-4">
      {t.brands.fruitel.description}
    </p>
    <Link
      to="/brands#fruitel"
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
    >
      {language === "fr" ? "Explorer" : "Explore"}
    </Link>
  </div>
</div>

    </div>
  </div>
</section>


      {/* Mission, Vision, Values */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            {t.values.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Premium Quality */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCertificate className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t.values.quality.title}
              </h3>
              <p className="text-gray-600">{t.values.quality.text}</p>
            </div>

            {/* 100% Natural*/}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t.values.innovation.title}
              </h3>
              <p className="text-gray-600">{t.values.innovation.text}</p>
            </div>

            {/* Trust */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {t.values.sustainability.title}
              </h3>
              <p className="text-gray-600">{t.values.sustainability.text}</p>
            </div>
          </div>
        </div>
      </section>
      
      
{/* ✅ Footer */}
      <footer className="bg-gray-900 text-gray-200 mt-20">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
          {/* Column 1 - Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {t.footer.company}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-orange-500 text-sm sm:text-base">
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link to="/brands" className="hover:text-orange-500 text-sm sm:text-base">
                  {t.footer.brands}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 text-sm sm:text-base">
                  {t.footer.about}
                </Link>
              </li>
             <li>
                <Link to="/contact" className="hover:text-orange-500 text-sm sm:text-base">
                  {t.footer.contact}
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Column 2 - Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white"> </h3>
              {t.footer.follow}
              <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <FaFacebook className="text-grey-500" /> 
          <a href="https://www.facebook.com/share/16krEbxqqn/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            Facebook
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaInstagram className="text-grey-500" /> 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            Instagram
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaLinkedin className="text-grey-500" /> 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-3">
          <FaTiktok className="text-grey-500" /> 
          <a href="https://www.tiktok.com/@petit_plaisir1?_t=ZM-8xWsRsVPz4a&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
            TikTok
          </a>
        </li>
      </ul>
            
           
            {/* ...socials unchanged... */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Bar */}
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link to="/privacy" className="hover:text-orange-500">
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className="hover:text-orange-500">
              {t.footer.terms}
            </Link>
            <Link to="/contact" className="hover:text-orange-500">
              {t.footer.contact}
            </Link>
          </div>
          <p className="text-center md:text-right">
            © {new Date().getFullYear()} {t.footer.company}. {t.footer.rights}
          </p>
        </div>

        {/* Back to Top */}
        <div className="text-center py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 mx-auto text-gray-400 hover:text-orange-500"
          >
            {t.footer.backToTop}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
