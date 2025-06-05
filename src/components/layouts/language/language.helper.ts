import { createContext } from 'react';

export const supportedLanguages = {
  ru: 'ru',
  en: 'en',
};

export type Languages = keyof typeof supportedLanguages;

export const StorageKey = 'lang';

export const getLanguage = (): Languages => {
  const browserLang = navigator.language;
  const lang = browserLang.startsWith('ru') ? 'ru' : 'en';

  if (typeof window === 'undefined') {
    return lang; // Возвращаем язык по умолчанию на сервере
  }

  let language = localStorage.getItem(StorageKey);

  if (!language) {
    localStorage.setItem(StorageKey, lang);
    language = lang;
  }

  return language as Languages;
};

export const LanguageContext = createContext<
  | {
      language: Languages;
      setLanguage: (lang: Languages) => void;
      supportedLanguages: { [key: string]: string };
    }
  | undefined
>(undefined);
