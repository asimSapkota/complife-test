import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Localization } from "./utils/constants";

const { fallbackLng, defaultNS } = Localization;

i18n
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng,
    defaultNS,
    cleanCode: true,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: Object.keys(Localization.languages),
    load: "currentOnly",
  });

export default i18n;