'use client';
import { useEffect, useState } from 'react';
import {
  getLanguage,
  LanguageContext,
  type Languages,
  StorageKeyLanguage,
  supportedLanguages,
} from './language.helper';
import { LanguageSwitcher } from '@/components/ui';

export const LanguageLayout = (props: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(getLanguage);

  useEffect(() => {
    localStorage.setItem(StorageKeyLanguage, language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, supportedLanguages }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

LanguageLayout.LanguageSwitcher = LanguageSwitcher;
