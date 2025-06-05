'use client';

import { motion, useInView } from 'framer-motion';
import { Brush, ShieldCheck, Zap } from 'lucide-react';
import styles from './index.module.scss';
import { useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from './i18n';

export const InfoBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <h1>{translations[language].title}</h1>
      <div className={styles.group}>
        <motion.div
          className={styles.block}
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.top}>
            <Zap color='#ffd747' size={40} />
            <p>{translations[language].card_1_header}</p>
          </div>
          <div className={styles.info}>
            <p>{translations[language].card_1_description}</p>
          </div>
        </motion.div>
        <motion.div
          className={styles.block}
          ref={ref}
          initial={{ opacity: 0, y: -80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.top}>
            <ShieldCheck color='#536aff' size={32} />
            <p>{translations[language].card_2_header}</p>
          </div>
          <div className={styles.info}>
            <p>{translations[language].card_2_description}</p>
          </div>
        </motion.div>
        <motion.div
          className={styles.block}
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.top}>
            <Brush color='#93ffaa' size={32} />
            <p>{translations[language].card_3_header}</p>
          </div>
          <div className={styles.info}>
            <p>{translations[language].card_3_description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
