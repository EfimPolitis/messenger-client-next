'use client';

import Link from 'next/link';
import styles from './index.module.scss';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { LanguageSwitcher } from '@/components/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from './i18n';

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.block}>
          <h2>{translations[language].column_1_title}</h2>
          <Link href={PUBLIC_PAGES.AGREEMENT} className={styles.link}>
            {translations[language].column_1_agreement}
          </Link>
          <Link href={PUBLIC_PAGES.CONFIDENTIALITY} className={styles.link}>
            {translations[language].column_1_confidentiality}
          </Link>
        </div>
        <div className={styles.block}>
          <h2>{translations[language].column_2_title}</h2>
          <Link href={PUBLIC_PAGES.LOGIN} className={styles.link}>
            {translations[language].column_2_signin}
          </Link>
          <Link href={PUBLIC_PAGES.REGISTER} className={styles.link}>
            {translations[language].column_2_signup}
          </Link>
        </div>
        <div className={styles.block}>
          <h2>{translations[language].column_3_language}</h2>
          <LanguageSwitcher />
        </div>
        <div className={styles.block}>
          <h2>{translations[language].column_4_questions}</h2>
          <Link href={'mailto:efimpolitis@yandex.ru'} className={styles.btn}>
            {translations[language].column_4_btn}
          </Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>quick.com © 2025 Quick - {translations[language].rights}</h2>
      </div>
    </footer>
  );
};
