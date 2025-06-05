'use client';

import { BellRing, LayoutDashboard, MessagesSquare, Users } from 'lucide-react';
import styles from './index.module.scss';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from './i18n';

export const CardBlock = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { language } = useLanguage();

  return (
    <section className={styles.section}>
      <h1>{translations[language].title}</h1>
      <div className={styles.cards}>
        <motion.div
          className={styles.card}
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        >
          <MessagesSquare size={100} />
          <p>{translations[language].card_1}</p>
        </motion.div>
        <motion.div
          className={styles.card}
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.75 }}
        >
          <Users size={100} />
          <p>{translations[language].card_2}</p>
        </motion.div>
        <motion.div
          className={styles.card}
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
        >
          <LayoutDashboard size={100} />
          <p>{translations[language].card_3}</p>
        </motion.div>
        <motion.div
          className={styles.card}
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.25 }}
        >
          <BellRing size={100} />
          <p>{translations[language].card_4}</p>
        </motion.div>
      </div>
    </section>
  );
};
