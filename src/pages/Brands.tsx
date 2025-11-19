import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { useTranslation } from "../translations";
// Petit Plaisir Product Gallery Component (robust, bilingual)
const PetitPlaisirProducts = () => {
  const { t } = useTranslation();               // <-- get translations object
  const [showProducts, setShowProducts] = React.useState(false);

  // Guarded access to the product intro (handles productIntro or productintro keys)
  const productIntro =
    t?.brands?.petitPlaisir?.productIntro ??
    t?.brands?.petitPlaisir?.productintro ??
    "";

  // Get raw products from translations (works if products is array OR object)
  const rawProducts = t?.brands?.petitPlaisir?.products ?? [];

  // If it's an object ({ product1: {...}, ... }) convert to array; if array, keep it
  const products = Array.isArray(rawProducts)
    ? rawProducts
    : Object.values(rawProducts);

  // Button labels from translations (with safe fallbacks)
  const showLabel = t?.brands?.petitPlaisir?.showProducts ?? "View Products";
  const hideLabel = t?.brands?.petitPlaisir?.hideProducts ?? "Close";

  return (
    <div className="mt-6">
      <p className="text-lg text-gray-600 mb-3">
        {productIntro}
      </p>

      <button
        onClick={() => setShowProducts((s) => !s)}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition font-medium"
      >
        {showProducts ? hideLabel : showLabel}
      </button>

     {showProducts && (
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
    {products.map((p: any, i: number) => (
      <div
        key={p.id ?? i}
        className="w-full max-w-[260px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-4 flex flex-col items-center hover:shadow-xl transition-transform transform hover:scale-[1.03]"
      >
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-48 object-contain rounded-md mb-3"
        />
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-center">
          {p.name}
        </h3>
      </div>
    ))}
  </div>
)}

    </div>
  );
};



const Brands = () => {
  const { language, t } = useTranslation();
  const [activeImagePetitPlaisir, setActiveImagePetitPlaisir] = useState(0);
  const [activeImageFruitel, setActiveImageFruitel] = useState(0);
  const [isPausedPetitPlaisir, setIsPausedPetitPlaisir] = useState(false);
  const [isPausedFruitel, setIsPausedFruitel] = useState(false);
  const location = useLocation();

  // Image sliders
  const petitPlaisirImages = [
    "/images/PP17.png",
    "/images/PetitPlaisir1.jpg",
    "/images/PP10.png",
    "/images/PPT.jpg",

  ];
  const fruitelImages = [
    "/images/Fruitel5.png",
    "/images/fruitel1.png",
    "/images/Fruitel2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedPetitPlaisir) {
        setActiveImagePetitPlaisir(
          (prev) => (prev + 1) % petitPlaisirImages.length
        );
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPausedPetitPlaisir]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPausedFruitel) {
        setActiveImageFruitel((prev) => (prev + 1) % fruitelImages.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isPausedFruitel]);

  // Smooth scroll for #anchors
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          {language === "fr" ? "Nos Marques - STA" : "Our Brands - STA"}
        </title>
        <meta
          name="description"
          content="Découvrez nos marques emblématiques Petit Plaisir et Fruitel, symboles de qualité et d’authenticité."
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


      {/* Hero */}
       <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden pt-12">
  <img
    src="/images/cerealfarm.png"
    alt="STA Brands Banner"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
  />


      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
  <div className="bg-Green/20 backdrop-blur-md rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg border border-white/30 max-w-2xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black drop-shadow-lg mb-4">
      {language === "fr" ? "Nos marques" : "Our brands"} <br />
    </h1>
    <p className="text-white text-base sm:text-lg md:text-xl font-medium drop-shadow">
      {language === "fr"
        ? "Découvrez les marques emblématiques Petit Plaisir et Fruitel, symboles de quatité et d'authenticité"
        : "Discover our iconic brands Petit Plaisir and Fruitel, symbols of quality and authenticity."}
    </p>
  </div>
</div>
</section>

     {/* Petit Plaisir */}
<section id="petitplaisir" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
    {/* Images */}
    <div
      className="h-96 rounded-2xl overflow-hidden shadow-xl relative"
      onMouseEnter={() => setIsPausedPetitPlaisir(true)}
      onMouseLeave={() => setIsPausedPetitPlaisir(false)}
    >
      {petitPlaisirImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeImagePetitPlaisir ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>

    {/* Text */}
    <div>
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        {t.brands.petitPlaisir.title}
      </h2>
      <p className="text-xl font-medium text-green-500 mb-6">
        {t.brands.petitPlaisir.tagline}
      </p>
      <p className="text-lg text-gray-600 mb-3">
        {t.brands.petitPlaisir.description}
      </p>

      {/* ✅ New text + button + gallery */}
      <PetitPlaisirProducts />

      <ul className="grid grid-cols-2 gap-4 text-lg text-gray-600 mb-3">
        {t.brands.petitPlaisir.features.map((f: string, i: number) => (
          <li key={i} className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


      {/* Fruitel */}
      <section id="fruitel" className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">
              {t.brands.fruitel.title}
            </h2>
            <p className="text-xl font-medium text-orange-500 mb-6">
              {t.brands.fruitel.tagline}
            </p>
            <p className="text-lg text-gray-600 mb-3">{t.brands.fruitel.description}</p>
            <ul className="grid grid-cols-2 gap-4 text-lg text-gray-600 mb-3">
              {t.brands.fruitel.features.map((f: string, i: number) => (
                <li key={i} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div
            className="h-96 rounded-2xl overflow-hidden shadow-xl relative"
            onMouseEnter={() => setIsPausedFruitel(true)}
            onMouseLeave={() => setIsPausedFruitel(false)}
          >
            {fruitelImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeImageFruitel ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.brands.ctaHeading}</h2>
          <Link
            to="/contact"
            className="bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition duration-300"
          >
            {t.brands.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Brands;
