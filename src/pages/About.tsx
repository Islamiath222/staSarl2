
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Keep only if you're using this one
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { FaBullseye, FaEye, FaCheckCircle, FaLightbulb, FaLeaf, FaBalanceScale, FaHeart, FaUsers } from "react-icons/fa";



const About = () => {
  const [language, setLanguage] = useState('fr');

  const translations = {
    fr: {
      nav: {
        home: 'Accueil',
        brands: 'Nos Marques',
        about: 'À Propos',
        contact: 'Contact',
        back: 'Retour à l\'accueil'
      },
      hero: {
        title: 'À Propos de STA',
        subtitle: 'Notre histoire, notre mission, nos valeurs'
      },
      history: {
        title: 'Notre Histoire',
        text: ' La Société de Transformation Alimentaire (STA) s’ est imposée comme un acteur majeur dans le secteur de la transformation et de l’ emballage alimentaire. Depuis nos débuts, nous nous sommes engagés à offrir des produits de la plus haute qualité, en respectant les traditions tout en innovant constamment pour répondre aux attentes de nos consommateurs.'
      },
      mission: {
        title: 'Notre Mission',
        text: ' Produire des aliments et des boissons naturels et nutritifs, en promouvant la consommation d’ une alimentation saine pour tous.'
      },
      vision: {
        title: 'Notre Vision',
        text: 'Devenir une entreprise agroalimentaire de premier plan reconnue pour la haute qualité de ses produits nutritifs.'
      },
      values: {
        title: 'Nos Valeurs Fondamentales',
        quality: {
          title: 'Qualité',
          text: 'Nous sélectionnons rigoureusement nos matières premières et appliquons les standards de qualité les plus élevés à chaque étape de production.'
        },
        innovation: {
          title: 'Innovation',
          text: 'Nous investissons constamment dans la recherche et le développement pour améliorer nos procédés et créer de nouveaux produits.'
        },
        sustainability: {
          title: 'Durabilité',
          text: 'Nous nous engageons à minimiser notre impact environnemental et à adopter des pratiques durables dans tous nos processus.'
        },
        integrity: {
          title: 'Intégrité',
          text: 'Nous agissons avec transparence et honnêteté envers nos clients, partenaires et employés.'
        },
        tradition: {
          title: 'Passion',
          text: 'Nous mettons tout notre cœur dans la transformation des produits alimentaires afin d’offrir à chaque famille des aliments sains, savoureux et authentiques. Notre engagement profond se reflète dans la qualité, l\ ’innovation et le respect des traditions locales. '
        },
        team: {
          title: 'Esprit d\'Équipe',
          text: 'Notre succès repose sur la collaboration et le dévouement de notre équipe passionnée et expérimentée.'
        }
      },
      differentiators: {
        title: 'Ce qui nous distingue',
        points: [
          
          'Traçabilité complète de nos produits de la source au consommateur',
          'Investissement continu dans les technologies de pointe',
          'Partenariats avec des producteurs locaux de confiance',
          'Engagement envers l\'amélioration continue des produits par l\'innovation'
        ]
      }
    },
    en: {
      nav: {
        home: 'Home',
        brands: 'Our Brands',
        about: 'About Us',
        contact: 'Contact',
        back: 'Back to home'
      },
      hero: {
        title: 'About STA',
        subtitle: 'Our history, our mission, our values'
      },
      history: {
        title: 'Our History',
        text: 'Food Processing Company (STA) has established itself as a major player in the food processing and packaging sector. Since our beginnings, we have committed to offering the highest quality products, respecting traditions while constantly innovating to meet our consumers\' expectations.'
      },
      mission: {
        title: 'Our Mission',
        text: 'Our mission is to transform natural raw materials into exceptional food products, preserving their nutritional quality and authentic flavor. We are committed to meeting the strictest standards in food safety and environmental sustainability.'
      },
      vision: {
        title: 'Our Vision',
        text: 'To become the regional leader in food processing by offering innovative, natural and environmentally friendly products. We aspire to create a future where healthy and tasty food is accessible to all.'
      },
      values: {
        title: 'Our Core Values',
        quality: {
          title: 'Quality Excellence',
          text: 'We rigorously select our raw materials and apply the highest quality standards at every stage of production.'
        },
        innovation: {
          title: 'Continuous Innovation',
          text: 'We constantly invest in research and development to improve our processes and create new products.'
        },
        sustainability: {
          title: 'Sustainability',
          text: 'We are committed to minimizing our environmental impact and adopting sustainable practices in all our processes.'
        },
        integrity: {
          title: 'Integrity',
          text: 'We act with transparency and honesty towards our customers, partners and employees.'
        },
        tradition: {
          title: 'Respect for Traditions',
          text: 'We honor traditional methods while adapting them to modern quality and safety requirements.'
        },
        team: {
          title: 'Team Spirit',
          text: 'Our success is based on the collaboration and dedication of our passionate and experienced team.'
        }
      },
      differentiators: {
        title: 'What sets us apart',
        points: [
         
          
          'Complete traceability of our products from source to consumer',
          'Continuous investment in cutting-edge technologies',
          'Partnerships with trusted local producers',
          'Commitment to continuous product improvement through innovation'
        ]
      }
    }
  };

  const t = translations[language];

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
            <Link to="/brands" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              {t.nav.brands}
            </Link>
            <Link to="/about" className="text-orange-600 font-medium">
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
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-32 mt-20">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center text-green-200 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            {t.nav.back}
          </Link>
          <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl opacity-90">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.history.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">{t.history.text}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-16">
      {/* Mission */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaBullseye className="text-white text-2xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.mission.title}</h3>
        <p className="text-gray-600 leading-relaxed text-center">{t.mission.text}</p>
      </div>

      {/* Vision */}
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaEye className="text-white text-2xl" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t.vision.title}</h3>
        <p className="text-gray-600 leading-relaxed text-center">{t.vision.text}</p>
      </div>
    </div>
  </div>
</section>


    {/* Values Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">{t.values.title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Quality */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
          <FaCheckCircle className="text-white text-xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.quality.title}</h4>
        <p className="text-gray-600">{t.values.quality.text}</p>
      </div>

      {/* Innovation */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
          <FaLightbulb className="text-white text-xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.innovation.title}</h4>
        <p className="text-gray-600">{t.values.innovation.text}</p>
      </div>

      {/* Sustainability */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
          <FaLeaf className="text-white text-xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.sustainability.title}</h4>
        <p className="text-gray-600">{t.values.sustainability.text}</p>
      </div>

      {/* Integrity */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
          <FaBalanceScale className="text-white text-xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.integrity.title}</h4>
        <p className="text-gray-600">{t.values.integrity.text}</p>
      </div>

      {/* Tradition */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
          <FaHeart className="text-white text-xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.tradition.title}</h4>
        <p className="text-gray-600">{t.values.tradition.text}</p>
      </div>

      {/* Team Spirit */}
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
          <FaUsers className="text-white text-xl" />
        </div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">{t.values.team.title}</h4>
        <p className="text-gray-600">{t.values.team.text}</p>
      </div>

    </div>
  </div>
</section>


      {/* What Sets Us Apart */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">{t.differentiators.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.differentiators.points.map((point, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {language === 'fr' ? 'Prêt à découvrir nos produits ?' : 'Ready to discover our products?'}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/brands"
              className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {language === 'fr' ? 'Découvrir nos marques' : 'Discover our brands'}
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 hover:scale-105"
            >
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
