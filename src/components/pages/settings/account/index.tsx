import { Languages, UserMinus } from 'lucide-react';
import styles from './index.module.scss';
import { LanguageSwitcher } from '@/components/ui';
import { Button } from '@/components/ui/buttons/button';

export const SettingsAccountPage = () => {
  return (
    <div className={styles.account}>
      <h1 className={styles.title}>Учётная запись</h1>
      <hr className={styles.line} />
      <div className={styles.language}>
        <div className={styles.name}>
          <h2>Язык</h2>
          <Languages />
        </div>
        <LanguageSwitcher />
      </div>
      <hr className={styles.short_line} />
      <div className={styles.delete_account}>
        <h2 className={styles.name}>Удаление учётной записи</h2>
        <Button className={styles.delete_btn}>
          <p>Удалить</p>
          <UserMinus />
        </Button>
      </div>
    </div>
  );
};
