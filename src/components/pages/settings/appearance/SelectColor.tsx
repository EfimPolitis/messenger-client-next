'use client';

import clsx from 'clsx';
import styles from './index.module.scss';
import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState } from 'react';

export const SelectColor = () => {
  const { color, setColor } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.color}>
      <h2>Основной цвет</h2>
      <ul className={styles.rectangles}>
        <li
          className={clsx(styles.rectangle, {
            [styles.active]: mounted && color === 'purple',
          })}
        >
          <button
            className={styles.purple}
            onClick={() => setColor('purple')}
          ></button>
        </li>
        <li
          className={clsx(styles.rectangle, {
            [styles.active]: mounted && color === 'red',
          })}
        >
          <button
            className={styles.red}
            onClick={() => setColor('red')}
          ></button>
        </li>
        <li
          className={clsx(styles.rectangle, {
            [styles.active]: mounted && color === 'orange',
          })}
        >
          <button
            className={styles.orange}
            onClick={() => setColor('orange')}
          ></button>
        </li>
        <li
          className={clsx(styles.rectangle, {
            [styles.active]: mounted && color === 'green',
          })}
        >
          <button
            className={styles.green}
            onClick={() => setColor('green')}
          ></button>
        </li>
      </ul>
    </div>
  );
};
