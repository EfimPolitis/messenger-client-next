'use client';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import Link from 'next/link';

import styles from './index.module.scss';
import { translations } from './i18n';
import { useLanguage } from '@/hooks/useLanguage';

export const StartBlcok = () => {
  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <h2>
        {translations[language].text_1}
        <span>Quick</span>
        {translations[language].text_2}
      </h2>
      <Link href={PUBLIC_PAGES.LOGIN} className={styles.btn}>
        {translations[language].btn}
      </Link>
    </section>
  );
};
