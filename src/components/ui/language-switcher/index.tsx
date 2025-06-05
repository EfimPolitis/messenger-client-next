'use client';
import { useLanguage } from '@/hooks/useLanguage';
import { InputSelect } from '../fields';
import { useEffect, useState } from 'react';
import { Languages } from '@/components/layouts/language/language.helper';
import { translations } from './i18n';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <InputSelect
      initialValue={language === 'ru' ? 'Русский' : 'English'}
      data={translations[language]}
      style={{ width: '250px' }}
      setState={lang => setLanguage(lang as Languages)}
    />
  );
};
