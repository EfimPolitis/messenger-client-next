'use client';

import { LanguageContext } from '@/components/layouts/language/language.helper';
import { useContext } from 'react';

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'You can use "useTheme" hook only within a <ThemeProvider> component.'
    );
  }

  return context;
};
