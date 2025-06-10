'use client';

import styles from './index.module.scss';
import { SelectColor } from './SelectColor';
import { SelectTheme } from './SelectTheme';

export const SettingsAppearancePage = () => {
  return (
    <div className={styles.appearance}>
      <h1 className={styles.title}>Внешний вид</h1>
      <hr className={styles.line} />
      <SelectTheme />
      <SelectColor />
    </div>
  );
};
