import type { AstroGlobal } from "astro";
import en from "./en.json";
import pl from "./pl.json";
import ua from "./ua.json";

const fallbackLanguage = "en";
const translations = {
  en,
  pl,
  ua,
};

type TranslationData = typeof translations;
type SupportedLanguage = keyof TranslationData;
type TranslationKey = keyof TranslationData[typeof fallbackLanguage];
type TranslatorFunc = (key: TranslationKey) => string;

export function useTranslation(astro: AstroGlobal): TranslatorFunc {
  let defaultLang: SupportedLanguage = fallbackLanguage;
  if (
    astro.locals.i18n?.defaultLocale &&
    Object.hasOwn(translations, astro.locals.i18n?.defaultLocale)
  ) {
    defaultLang = astro.locals.i18n?.defaultLocale as SupportedLanguage;
  }

  let lang: SupportedLanguage = defaultLang;
  const maybeLangFromUrl =
    astro.url.pathname.split("/").filter(Boolean)[0] || "";
  if (Object.hasOwn(translations, maybeLangFromUrl)) {
    lang = maybeLangFromUrl as SupportedLanguage;
  }

  return function t(key: TranslationKey) {
    return translations[lang][key] || translations[defaultLang][key];
  };
}
