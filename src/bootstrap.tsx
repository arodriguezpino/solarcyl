import i18next from "i18next";
import { locales } from "./locales";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: locales,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
