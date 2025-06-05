'use client';

import Image from 'next/image';
import styles from './index.module.scss';
import Link from 'next/link';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { useTheme } from '@/hooks/useTheme';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from './i18n';

export const FirstScreen = () => {
  const ref = useRef(null);

  const { theme } = useTheme();
  const { language } = useLanguage();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h1>{translations[language].h1}</h1>
        <h2>{translations[language].h2}</h2>
        <p>{translations[language].p}</p>
        <Link href={PUBLIC_PAGES.LOGIN} className={styles.btn}>
          {translations[language].link}
        </Link>
      </div>
      {mounted && (
        <motion.div
          className={styles.image}
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            alt='chats photo'
            src={
              theme === 'dark' ? '/chats-ru-dark.jpg' : '/chats-ru-light.jpg'
            }
            height={675}
            width={1200}
          />
        </motion.div>
      )}
    </section>
  );
};
