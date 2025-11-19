// src/translations.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

const translations: Record<Language, any> = {
  en: {
    nav: {
      home: "Home",
      brands: "Our Brands",
      about: "About Us",
      contact: "Contact",
    },
    index: {
      welcome: "Welcome to STA - Food Transformation Excellence",
      intro: "Quality food products under our brands Fruitel & Petit Plaisir.",
    },
    hero: {
      welcome: "Société de Transformation Alimentaire Sarl",
      subtitle: "Excellence in manifacturing and packaging high-quality food products",
    },
    
  home: {
    Welcome: {
      title: "Welcome to STA",
      text: "STA has been committed to processing and packaging the highest quality food products under our Fruitel and Petit Plaisir brands. Our mission is to offer you natural, fresh and tasty products."
    }
  },
    aboutUs: {
    history: {
      title: "Who we are",
      text: "We are a food and drink manufacturing company dedicated to tackling hunger and malnutrition while creating sustainable jobs, in line with UN Sustainable Development Goals 2 (Zero Hunger) and 8 (Decent Work and Economic Growth). By developing innovative, high-quality products rooted in local diets — and continuously improving what we offer — we help build healthier communities and stronger local economies.",
      } },
  
    mission: {
      title: "Our Mission",
      text: "Our mission is to transform natural raw materials into exceptional food products, preserving their nutritional quality and authentic flavor. We are committed to meeting the strictest standards in food safety and environmental sustainability.",
    },
    vision: {
      title: "Our Vision",
      text: "To become the regional leader in food processing by offering innovative, natural and environmentally friendly products. We aspire to create a future where healthy and tasty food is accessible to all.",
    },
    values: {
      title: "Our Core Values",
      quality: {
        title: " Premium Quality",
        text: "Rigorous selection of the best raw material.",
      },
      innovation: {
        title: "100% Natural",
        text: "No preservative or artificial additives.",
      },
      sustainability: {
        title: "Trust",
        text: "Transparency and traceability at every step.",
      },
      integrity: {
        title: "Integrity",
        text: "We act with transparency and honesty towards our customers, partners and employees.",
      },
      tradition: {
        title: "Passion",
        text: "We put our heart into processing food products to offer every family healthy, delicious, and authentic foods. Our deep commitment is reflected in quality, innovation, and respect for local traditions.",
      },
      team: {
        title: "Team Spirit",
        text: "Our success is built on the collaboration and dedication of our passionate and experienced team.",
      },
    },
    differentiators: {
      title: "What make us different?",
      points: [
        "Complete traceability of our products from source to consumer",
        "Continuous investment in cutting-edge technologies",
        "Partnerships with trusted local producers",
        "Commitment to continuous product improvement through innovation",
      ],
    },
    
  "footer": {
    "company": "STA SARL",
    "about": "About Us",
    "brands": "Our Brands",
    "sustainability": "Sustainability",
    "news": "News & Events",
    "careers": "Careers",
    "follow": "Follow us:",
    "contact": "Contact Us",
    "backToTop": "↑ Back to Top",
    "rights": "All Rights Reserved."
  },


    brands: {
      hero: {
        title: "Our Brands",
        subtitle: "Discover our two iconic brands Fruitel & Petit Plaisir.",
      },
      petitPlaisir: {
        title: "Petit Plaisir",
        tagline: "Happiness in small bites",
        description:
          "Petit Plaisir brings joy and indulgence to your daily life. Our products are prepared with love and tradition, offering authentic flavors that will delight young and old. Each bite is a moment of pure happiness.",
        productintro:
  "The first four products in our range are: Maize and Soy, Wheat and Milk, Millet and Sorghum, and Enriched Sorghum.",
productIntro: "The first four products in our range are: Corn and Soy, Wheat and Milk, Millet and Sorghum, and Enriched Sorghum.",
showProducts: "View Products",
hideProducts: "Close",
products: {
  product1: { name: "Corn and Soy", image: "/images/PP16.png" },
  product2: { name: "Wheat and Milk", image: "/images/PP15.png" },
  product3: { name: "Millet and Sorghum", image: "/images/PP14.png" },
  product4: { name: "Enriched Sorghum", image: "/images/PP18.png" },
},


          features: [
          "Traditional recipes",
          "Authentic flavors",
          "For the whole family",
          "Selected ingredients",
          "Artisanal preparation",
          "Moments of pleasure"
        ],
      },
      fruitel: {
        title: "Fruitel",
        tagline: "Nature’s goodness in every sip.",
        description:
          "Fruitel represents excellence in fruit processing. Our products are 100% natural, without preservatives or artificial additives. Each fruit is carefully selected and processed to preserve all its authentic flavor and nutritional qualities.",
        features: [
          "100% natural",
          "Rich in vitamins",
          "Quality certification",
          "No preservatives",
          "Guaranteed traceability",
          "Eco-friendly packaging",

        ],
      },
      ctaHeading: "Taste the Future of Food Transformation",
      cta: "Contact Us Today",
    },
    about: {
      title: "About STA",
      intro: "STA is committed to excellence in food transformation.",
      team: "Meet our passionate team dedicated to innovation.",
    },
    contact: {
      hero: {
        title: "Contact Us",
        subtitle:
          "We’d love to hear from you! Get in touch for inquiries or collaborations.",
      },
      form: {
        title: "Send Us a Message",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Your message has been sent successfully!",
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        messageRequired: "Message is required",
      },
      info: {
        title: "Contact Information",
        address: "Our Address",
        addressValue: "Ganou Parakou-Benin",
        phone: "Phone",
        phoneValue: "+229 01 97 79 46 25",
        hours: "Opening Hours",
        hoursValue: "Mon - Fri: 9:00 AM - 6:00 PM",
      },
    },
    notFound: {
      message: "Page not found!",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      brands: "Nos Marques",
      about: "À Propos",
      contact: "Contact",
    },
    index: {
      welcome:
        "Bienvenue à STA - Excellence dans la transformation alimentaire",
      intro:
        "Des produits alimentaires de qualité sous nos marques Fruitel & Petit Plaisir.",
    },
    hero: {
      welcome: "Société de Transformation Alimentaire Sarl",
      subtitle: "Excellence dans la transformation et le conditionnement de produits alimentaires de haute qualité.",
    },
    
     home: {
    Welcome: {
      title: "Bienvenue chez STA",
      text: "STA s'engage à transformer des produits alimentaires de la plus haute qualité sous nos marques Fruitel et Petit Plaisir. Notre mission est de vous offrir des produits naturels, frais et savoureux."
    }
  },
    aboutUs: {
    history: {
      title: "Qui sommes-nous?",
      text: "Nous sommes une entreprise de fabrication de produit alimentaire et boissons dédiée à la lutte contre la faim et la malnutrition, tout en créant des emplois durables, conformément aux Objectifs de Développement Durable des Nations Unies n°2 (Faim « zéro ») et n°8 (Travail décent et croissance économique). En développant des produits innovants et de haute qualité, inspirés des régimes alimentaires locaux — et en améliorant continuellement notre offre — nous contribuons à bâtir des communautés plus saines et des économies locales plus solides.",
      } },
    mission: {
      title: "Notre Mission",
      text: "Produire des aliments et des boissons naturels et nutritifs, en promouvant la consommation d’ une alimentation saine pour tous.",
    },
    vision: {
      title: "Notre Vision",
      text: "Devenir une entreprise agroalimentaire de premier plan reconnue pour la haute qualité de ses produits nutritifs.",
    },
    values: {
      title: "Nos Valeurs Fondamentales",
      quality: {
        title: "Qualité Premium",
        text: "Selection rigoureuse des matières premières.",
      },
      innovation: {
        title: "100% Naturel",
        text: "Sans conservateur ni additif artificiel.",
      },
      sustainability: {
        title: "Transparence",
        text: "Transparence et tracabilité.",
      },
      integrity: {
        title: "Intégrité",
        text: "Nous agissons avec transparence et honnêteté envers nos clients, partenaires et employés.",
      },
      tradition: {
        title: "Passion",
        text: "Nous mettons tout notre cœur dans la transformation des produits alimentaires afin d’offrir à chaque famille des aliments sains, savoureux et authentiques. Notre engagement profond se reflète dans la qualité, l ’innovation et le respect des traditions locales.",
      },
      team: {
        title: "Esprit d'Équipe",
        text: "Notre succès repose sur la collaboration et le dévouement de notre équipe passionnée et expérimentée.",
      },
    },
    differentiators: {
      title: "Ce qui nous distingue?",
      points: [
        "Traçabilité complète de nos produits de la source au consommateur",
        "Investissement continu dans les technologies de pointe",
        "Partenariats avec des producteurs locaux de confiance",
        "Engagement envers l'amélioration continue des produits par l'innovation",
      ],
    },// fr

  "footer": {
    "company": "STA SARL",
    "about": "À propos de nous",
    "brands": "Nos Marques",
    "sustainability": "Durabilité",
    "news": "Actualités & Événements",
    "careers": "Carrières",
    "follow": "Suivez-nous :",
    "contact": "Contactez-nous",
    "backToTop": "↑ Haut de page",
    "rights": "Tous droits réservés."
  }, 
    brands: {
      hero: {
        title: "Nos Marques",
        subtitle:
          "Découvrez nos deux marques emblématiques Fruitel & Petit Plaisir.",
      },
      petitPlaisir: {
        title: "Petit Plaisir",
        tagline: "Le bonheur en petites bouchées",
        description:
          "Petit Plaisir apporte joie et gourmandise à votre quotidien. Nos produits sont préparés avec amour et tradition, offrant des saveurs authentiques qui raviront petits et grands. Chaque bouchée est un moment de pur bonheur.",
        productintro:
  "Les quatre premiers produits de notre gamme sont : Maïs et Soja, Blé et Lait, Mil et Sorgho, et Sorgho enrichi.",
productIntro: "Les quatre premiers produits de notre gamme sont : Maïs et Soja, Blé et Lait, Mil et Sorgho, et Sorgho enrichi.",
showProducts: "Voir les produits",
hideProducts: "Fermer",

products: {
  product1: { name: "Maïs et Soja", image: "/images/PP16.png" },
  product2: { name: "Blé et Lait", image: "/images/PP15.png" },
  product3: { name: "Mil et Sorgho", image: "/images/PP14.png" },
  product4: { name: "Sorgho enrichi", image: "/images/PP18.png" },
},




          features: [
          "Recettes traditionelles",
          "Saveurs authentiques",
          "Pour toute la famille",
          "Ingredients selectionnés",
          "Preparation artisanale",
          "Moments de plaisir",
        ],
      },
      fruitel: {
        title: "Fruitel",
        tagline: "La nature à l'état pur",
        description:
          "Fruitel représente l'excellence dans la transformation des fruits. Nos produits sont 100% naturels, sans conservateurs ni additifs artificiels. Chaque fruit est soigneusement sélectionné et transformé pour préserver toute sa saveur authentique et ses qualités nutritionnelles.",
        features: [
          "100% naturel",
          "Riche en vitamines",
          "Certification qualité",
          "Sans conservateurs",
          "Tracabilité guarantie",
          "Emballage écologique",
        ],
      },
      ctaHeading: "Intéressé par nos produits ?",
      cta: "Contactez-Nous",
    },
    about: {
      title: "À Propos de STA",
      intro: "STA s'engage à l'excellence dans la transformation alimentaire.",
      team: "Rencontrez notre équipe passionnée dédiée à l'innovation.",
    },
    contact: {
      hero: {
        title: "Contactez-Nous",
        subtitle:
          "Nous serions ravis d’échanger avec vous ! Contactez-nous pour toute demande ou collaboration.",
      },
      form: {
        title: "Envoyez-nous un message",
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
        submit: "Envoyer",
        submitting: "Envoi en cours...",
        success: "Votre message a été envoyé avec succès !",
        nameRequired: "Le nom est requis",
        emailRequired: "L'email est requis",
        emailInvalid: "Veuillez entrer une adresse email valide",
        messageRequired: "Le message est requis",
      },
      info: {
        title: "Informations de Contact",
        address: "Notre Adresse",
        addressValue: "Quartier Ganou, Parakou-Benin",
        phone: "Téléphone",
        phoneValue: "+229 01 97 79 46 25",
        hours: "Horaires d’Ouverture",
        hoursValue: "Lun - Ven : 9h00 - 18h00",
      },
    },
    notFound: {
      message: "Page non trouvée!",
    },
    
  },
};

interface TranslationContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations["en"];
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const value: TranslationContextProps = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
};
