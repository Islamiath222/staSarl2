import { createContext, useContext, useState, ReactNode } from "react";

export const translations = {
  en: {
    nav: {
      home: "Home",
      brands: "Our Brands",
      about: "About Us",
      contact: "Contact",
    },
    hero: {
      welcome: "Welcome to STA",
      subtitle: "Transforming nature into nutrition",
    },
    history: {
      title: "Our History",
      text: "STA was born from a passion for natural food transformation, combining tradition and innovation to deliver high-quality products.",
    },
    mission: {
      title: "Our Mission",
      text: "To provide high-quality natural food products that nourish and inspire.",
    },
    vision: {
      title: "Our Vision",
      text: "To be the leading company in natural food transformation, trusted worldwide.",
    },
    values: {
      title: "Our Values",
      quality: { title: "Quality", text: "We guarantee excellence in every product." },
      innovation: { title: "Innovation", text: "We constantly create and improve." },
      sustainability: { title: "Sustainability", text: "We respect and protect the environment." },
      integrity: { title: "Integrity", text: "We act with honesty and responsibility." },
      tradition: { title: "Tradition", text: "We preserve heritage while embracing progress." },
      team: { title: "Team Spirit", text: "We grow stronger by working together." },
    },
    differentiators: {
      title: "What Makes Us Different",
      points: [
        "Commitment to natural and healthy food",
        "Strong focus on sustainability",
        "Blending tradition with innovation",
        "Customer-first philosophy",
      ],
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      brands: "Nos Marques",
      about: "À Propos",
      contact: "Contact",
    },
    hero: {
      welcome: "Bienvenue chez STA",
      subtitle: "Nous transformons la nature en nutrition",
    },
    history: {
      title: "Notre Histoire",
      text: "STA est née d'une passion pour la transformation alimentaire naturelle, alliant tradition et innovation pour offrir des produits de haute qualité.",
    },
    mission: {
      title: "Notre Mission",
      text: "Fournir des produits alimentaires naturels de haute qualité qui nourrissent et inspirent.",
    },
    vision: {
      title: "Notre Vision",
      text: "Être le leader de la transformation alimentaire naturelle, reconnu dans le monde entier.",
    },
    values: {
      title: "Nos Valeurs",
      quality: { title: "Qualité", text: "Nous garantissons l'excellence de chaque produit." },
      innovation: { title: "Innovation", text: "Nous innovons et améliorons constamment." },
      sustainability: { title: "Durabilité", text: "Nous respectons et protégeons l'environnement." },
      integrity: { title: "Intégrité", text: "Nous agissons avec honnêteté et responsabilité." },
      tradition: { title: "Tradition", text: "Nous préservons l'héritage tout en progressant." },
      team: { title: "Esprit d'équipe", text: "Nous grandissons ensemble grâce à la collaboration." },
    },
    differentiators: {
      title: "Ce qui nous distingue",
      points: [
        "Engagement envers des aliments naturels et sains",
        "Forte orientation vers la durabilité",
        "Alliance de la tradition et de l'innovation",
        "Une philosophie centrée sur le client",
      ],
    },
  },
};

type TranslationContextType = {
  language: "en" | "fr";
  setLanguage: (lang: "en" | "fr") => void;
  t: typeof translations["en"];
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used inside TranslationProvider");
  return ctx;
};
