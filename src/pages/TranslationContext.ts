// src/contexts/TranslationContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import translations from "../data/translations.json"; // Your translation strings

type Language = "en" | "fr";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations["en"];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
