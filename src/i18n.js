import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation }
  },
  lng: "fr", // langue par défaut
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // React gère déjà l'échappement
  }
});

export default i18n;
