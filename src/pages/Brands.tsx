
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Helmet } from 'react-helmet';


const Brands = () => {
  const [language, setLanguage] = useState('fr');
  const [activeImagePetitPlaisir, setActiveImagePetitPlaisir] = useState(0);
  const [activeImageFruitel, setActiveImageFruitel] = useState(0);
  const [isPausedFruitel, setIsPausedFruitel] = useState(false);
  const [isPausedPetitPlaisir, setIsPausedPetitPlaisir] = useState(false);

 
 const petitPlaisirImages = [
    "/images/PP2.png",
  "/images/PP3.png",
  "/images/PP1.png"
];
useEffect(() => {
  const interval = setInterval(() => {
    if (!isPausedPetitPlaisir) {
      setActiveImagePetitPlaisir((prev) => (prev + 1) % petitPlaisirImages.length);
    }
  }, 3000);
  return () => clearInterval(interval);
}, [isPausedPetitPlaisir, petitPlaisirImages.length]);

 const fruitelImages = [
    "/images/fruteli.png",
  "/images/fruitel1.png",
  "/images/Fruitel2.png"
];
useEffect(() => {
  const interval = setInterval(() => {
    if (!isPausedFruitel) {
      setActiveImageFruitel((prev) => (prev + 1) % fruitelImages.length);
    }
  }, 3000);
  return () => clearInterval(interval);
}, [isPausedFruitel, fruitelImages.length]);

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        brands: 'Nos Marques',
        about: 'À Propos',
        contact: 'Contact',
        back: 'Retour à l\'accueil'
      },
      title: 'Nos Marques',
      subtitle: 'Découvrez nos deux marques emblématiques',
      
       petitPlaisir: {
        title: 'Petit Plaisir',
        tagline: 'Le bonheur en petites bouchées',
        description: 'Petit Plaisir apporte joie et gourmandise à votre quotidien. Nos produits sont préparés avec amour et tradition, offrant des saveurs authentiques qui raviront petits et grands. Chaque bouchée est un moment de pur bonheur.',
        features: [
          'Recettes traditionnelles',
          'Saveurs authentiques',
          'Pour toute la famille',
          'Ingrédients sélectionnés',
          'Préparation artisanale',
          'Moments de plaisir'
        ]
      },
      fruitel: {
        title: 'Fruitel',
        tagline: 'La nature à l\'état pur',
        description: 'Fruitel représente l\'excellence dans la transformation des fruits. Nos produits sont 100% naturels, sans conservateurs ni additifs artificiels. Chaque fruit est soigneusement sélectionné et transformé pour préserver toute sa saveur authentique et ses qualités nutritionnelles.',
        features: [
          '100% Naturel',
          'Sans conservateurs',
          'Riche en vitamines',
          'Traçabilité garantie',
          'Certification qualité',
          'Emballage écologique'
        ]
        
      },
     
    },
    en: {
      nav: {
        home: 'Home',
        brands: 'Our Brands',
        about: 'About Us',
        contact: 'Contact',
        back: 'Back to home'
      },
      title: 'Our Brands',
      subtitle: 'Discover our two iconic brands',
      fruitel: {
        title: 'Fruitel',
        tagline: 'Nature in its purest form',
        description: 'Fruitel represents excellence in fruit processing. Our products are 100% natural, without preservatives or artificial additives. Each fruit is carefully selected and processed to preserve all its authentic flavor and nutritional qualities.',
        features: [
          '100% Natural',
          'No preservatives',
          'Rich in vitamins',
          'Guaranteed traceability',
          'Quality certification',
          'Eco-friendly packaging'
        ]
      },
      petitPlaisir: {
        title: 'Petit Plaisir',
        tagline: 'Happiness in small bites',
        description: 'Petit Plaisir brings joy and indulgence to your daily life. Our products are prepared with love and tradition, offering authentic flavors that will delight young and old. Each bite is a moment of pure happiness.',
        features: [
          'Traditional recipes',
          'Authentic flavors',
          'For the whole family',
          'Selected ingredients',
          'Artisanal preparation',
          'Moments of pleasure'
        ]
      },
      cta: 'Contact us for more information'
    }
  };

  const t = translations[language];
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [location]);



  return (
   <div className="min-h-screen bg-white">
    <Helmet>
          <title>{language === 'fr' ? 'À Propos - STA' : 'About Us - STA'}</title>
          <meta name="description" content="Découvrez l’histoire, la mission, et les valeurs de STA, votre expert en transformation alimentaire naturelle." />
        </Helmet>
     {/* Fixed Social Media Icons */}
     <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
       <a 
         href="https://www.facebook.com/share/16krEbxqqn/?mibextid=wwXIfr" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaFacebook size={20} />
       </a>
       <a 
         href="https://instagram.com" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaInstagram size={20} />
       </a>
       <a 
         href="https://linkedin.com" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
         <FaLinkedin size={20} />
       </a>
       <a 
         href="https://www.tiktok.com/@petit_plaisir1?_t=ZM-8xWsRsVPz4a&_r=1" 
         target="_blank" 
         rel="noopener noreferrer"
         className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300 shadow-lg"
       >
           <FaTiktok size={20} />
       </a>
       </div>


      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
          <div className="h-full flex items-center mr-4">
  <img
    src="/images/Logo.png"
    alt="STA Logo"
    className="h-full max-h-14 w-auto object-contain"
  />
</div>



          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.home}
            </Link>
            <Link to="/brands" className="text-orange-600 font-medium">
              {t.nav.brands}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.about}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 rounded ${language === 'fr' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded ${language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'} transition-colors`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center text-orange-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t.nav.back}
          </Link>
          <h1 className="text-5xl font-bold mb-6">{t.title}</h1>
          <p className="text-xl opacity-90">{t.subtitle}</p>
        </div>
      </section>
 {/* Petit Plaisir Section */}
     {/* Petit Plaisir Section */}
<section id="petitplaisir" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div
  className="h-96 rounded-2xl overflow-hidden shadow-xl"
  onMouseEnter={() => setIsPausedPetitPlaisir(true)}
  onMouseLeave={() => setIsPausedPetitPlaisir(false)}
>

                  {petitPlaisirImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeImagePetitPlaisir ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {petitPlaisirImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImagePetitPlaisir(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeImagePetitPlaisir ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-r from-green-400 to-blue-400 text-white p-2 rounded-lg inline-block mb-6">
                <h2 className="text-3xl font-bold px-4 py-2">{t.petitPlaisir.title}</h2>
              </div>
              <p className="text-xl text-green-600 font-medium mb-6">{t.petitPlaisir.tagline}</p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t.petitPlaisir.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {t.petitPlaisir.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fruitel Section */}
      
<section id="fruitel" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white p-2 rounded-lg inline-block mb-6">
                <h2 className="text-3xl font-bold px-4 py-2">{t.fruitel.title}</h2>
              </div>
              <p className="text-xl text-orange-600 font-medium mb-6">{t.fruitel.tagline}</p>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{t.fruitel.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {t.fruitel.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div
  className="h-96 rounded-2xl overflow-hidden shadow-xl"
  onMouseEnter={() => setIsPausedFruitel(true)}
  onMouseLeave={() => setIsPausedFruitel(false)}
>

                  {fruitelImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeImageFruitel ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {fruitelImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageFruitel(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeImageFruitel ? 'bg-orange-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{language === 'fr' ? 'Intéressé par nos produits ?' : 'Interested in our products?'}</h2>
          <Link
            to="/contact"
            className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          
          >
            {language === 'fr' ? 'Contactez nous' : 'Contact Us'}
            {t.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Brands;
