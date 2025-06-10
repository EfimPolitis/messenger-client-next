'use client';

import { useTheme } from '@/hooks/useTheme';
import styles from './index.module.scss';
import { InputSelect } from '@/components/ui/fields';
import { Themes } from '@/components/layouts/theme/theme.helper';
import { useEffect, useState } from 'react';

const themeData = [
  {
    key: 'dark',
    label: 'Тёмная',
  },
  {
    key: 'light',
    label: 'Светлая',
  },
];

export const SelectTheme = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.theme}>
      <h2>Цветовая тема</h2>
      {mounted ? (
        <InputSelect
          initialValue={theme === 'light' ? 'Светлая' : 'Тёмная'}
          data={themeData}
          style={{ width: '220px' }}
          setState={theme => setTheme(theme as Themes)}
        />
      ) : (
        <InputSelect style={{ width: '220px' }} />
      )}
    </div>
  );
};
