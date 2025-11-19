import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaBullseye,
  FaEye,
  FaCertificate,
  FaLightbulb,
  FaLeaf,
  FaBalanceScale,
  FaHeart,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

import { useTranslation } from "../translations";

const About = () => {
  const { language, t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>
          {language === "fr" ? "À Propos - STA" : "About Us - STA"}
        </title>
        <meta
          name="description"
          content={
            language === "fr"
              ? "Découvrez l'histoire, la mission, et les valeurs de STA, votre expert en transformation alimentaire naturelle."
              : "Discover STA’s history, mission, and values — your expert in natural food processing."
          }
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
    <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden pt-12">
  <img
    src="/images/PetitPL.png"
    alt="STA About Banner"
    className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
  />


      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
  <div className="bg-Green/20 backdrop-blur-md rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg border border-white/30 max-w-2xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black drop-shadow-lg mb-4">
      {language === "fr" ? "À propos de STA Sarl" : "About STA Sarl"} <br />
    </h1>
    <p className="text-white text-base sm:text-lg md:text-xl font-medium drop-shadow">
      {language === "fr"
        ? "Excellence dans la transformation et le conditionnement de produits alimentaires de haute qualité"
        : "Excellence in manifacturing and packaging high-quality food products"}
    </p>
  </div>
</div>
</section>
      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
  {t.aboutUs.history.title}
</h2>
<p className="text-lg text-gray-600 leading-relaxed">
  {t.aboutUs.history.text}
</p>


          </div>
        </div>
      </section>
       {/* Why STA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="relative bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-orange-100">
            <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              {language === "fr" ? "Pourquoi STA ?" : "Why STA?"}
            </span>

            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              {language === "fr"
                ? "La carence en micronutriments, notamment en zinc, fer et calcium, constitue un enjeu majeur de santé publique en Afrique de l’Ouest, touchant une part importante de la population, en particulier les femmes et les jeunes enfants, avec des taux de prévalence variables selon les pays. Au Bénin, malgré l’abondance des ressources naturelles et la biodiversité remarquable du pays, un fardeau nutritionnel persiste, caractérisé par une sous-nutrition généralisée. Parmi les enfants de moins de cinq ans, 32% sont atteints de retard de croissance, dont 11% souffrent d’un retard sévère ; 71,5% sont anémiques, 17% ont un poids insuffisant et 5% sont émaciés. Les aliments complémentaires fournis aux nourrissons et jeunes enfants sont principalement des bouillies à base de céréales, pourtant seuls 28% des enfants âgés de 6 à 23 mois atteignent la diversité alimentaire minimale recommandée. De plus, les apports quotidiens en vitamines et minéraux essentiels, tels que le fer, le calcium et le zinc, demeurent nettement inférieurs aux niveaux recommandés. Nous relevons ces défis à travers nos produits. "
                : "Micronutrient deficiency, including zinc, iron and calcium, is a major public health challenge in West Africa, affecting a significant portion of the population, especially women and young children, with prevalence rates varying across countries. In Benin, despite the nation’s abundant natural resources and remarkable biodiversity, a nutritional burden persists, characterized by widespread undernutrition. Among children under the age of five, 32% are stunted, with 11% suffering from severe stunting; 71.5% are anemic, 17% are underweight, and 5% are wasted. Complementary foods provided to infants and young children are mainly cereal-based porridges, yet only 28% of children aged 6 to 23 months meet the minimum recommended dietary diversity. Furthermore, daily intakes of vitamins and essential minerals such as iron, calcium and zinc remain significantly below recommended levels. We are addressing these challenges through our products."}
            </p>
          </div>
        </div>
      </section>


      {/* Mission & Vision */}
     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
      
      {/* Mission */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <FaBullseye className="text-white text-xl sm:text-2xl" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          {t.mission.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {t.mission.text}
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
          <FaEye className="text-white text-xl sm:text-2xl" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          {t.vision.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {t.vision.text}
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Values Section */}
<section className="py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
      {t.values.title}
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {/* Quality */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <FaCertificate className="text-white text-lg sm:text-xl" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          {t.values.quality.title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base">{t.values.quality.text}</p>
      </div>

      {/* Innovation / Natural */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <FaLeaf className="text-white text-lg sm:text-xl" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          {t.values.innovation.title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base">{t.values.innovation.text}</p>
      </div>

      {/* Sustainability */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <FaHandshake className="text-white text-lg sm:text-xl" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          {t.values.sustainability.title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base">{t.values.sustainability.text}</p>
      </div>

      {/* Integrity */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <FaBalanceScale className="text-white text-lg sm:text-xl" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          {t.values.integrity.title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base">{t.values.integrity.text}</p>
      </div>

      {/* Tradition */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <FaHeart className="text-white text-lg sm:text-xl" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          {t.values.tradition.title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base">{t.values.tradition.text}</p>
      </div>

      {/* Team Spirit */}
      <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
          <FaUsers className="text-white text-lg sm:text-xl" />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
          {t.values.team.title}
        </h4>
        <p className="text-gray-600 text-sm sm:text-base">{t.values.team.text}</p>
      </div>
    </div>
  </div>
</section>

{/* Differentiators */}
<section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
        {t.differentiators.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {t.differentiators.points.map((point, index) => (
          <div
            key={index}
            className="flex items-start bg-white p-5 sm:p-6 rounded-lg shadow-md"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-white text-sm sm:text-base font-bold">{index + 1}</span>
            </div>
            <p className="text-gray-700 font-medium text-sm sm:text-base">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === "fr"
              ? "Prêt à découvrir nos produits ?"
              : "Ready to discover our products?"}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/brands"
              className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {language === "fr"
                ? "Découvrir nos marques"
                : "Discover our brands"}
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
            >
              {language === "fr" ? "Nous contacter" : "Contact us"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
 
};

export default About;
