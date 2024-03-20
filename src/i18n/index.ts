import en from "./en.json";
import pl from "./pl.json";
import ua from "./ua.json";

const defaultLanguage = "en";
const translations = {
  en,
  pl,
  ua,
};

type TranslationData = typeof translations;
type SupportedLanguage = keyof TranslationData;
type TranslationKey = keyof TranslationData[typeof defaultLanguage];
type TranslatorFunc = (key: TranslationKey) => string;

export function useTranslation(url: URL): TranslatorFunc {
  const parts = url.pathname.split("/").filter(Boolean);
  const candidate = parts[0] || "";

  const lang = (
    Object.hasOwn(translations, candidate) ? candidate : defaultLanguage
  ) as SupportedLanguage;

  return function t(key: TranslationKey) {
    return translations[lang][key] || translations[defaultLanguage][key];
  };
}
