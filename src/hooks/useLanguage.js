// hooks/useLanguage.js
import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved language preference, default to 'fr'
    return localStorage.getItem('sta-language') || 'fr';
  });

  useEffect(() => {
    // Save language preference to localStorage whenever it changes
    localStorage.setItem('sta-language', language);
  }, [language]);

  return [language, setLanguage];
};