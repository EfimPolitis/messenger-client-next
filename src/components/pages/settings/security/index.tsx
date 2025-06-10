'use client';

import { Field } from '@/components/ui/fields';
import styles from './index.module.scss';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';

export const SettingsSecurityPage = () => {
  return (
    <div className={styles.security}>
      <h1 className={styles.title}>Безопасность</h1>
      <hr className={styles.line} />
      <div className={styles.change_password}>
        <form className={styles.form}>
          <div className={styles.top}>
            <div className={styles.field_block}>
              <label htmlFor='currentPassword'>Текущий пароль</label>
              <Field
                type='password'
                name='currentPassword'
                placeholder='Текущий пароль'
                Icon={Lock}
                isPassword
                className='w-96'
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.field_block}>
              <label htmlFor='newPassword'>Новый пароль</label>
              <Field
                type='password'
                name='newPassword'
                placeholder='Новый пароль'
                Icon={Lock}
                isPassword
                className='w-96'
              />
            </div>
            <div className={styles.field_block}>
              <label htmlFor='confirmNewPassword'>
                Подтверждение нового пароля
              </label>
              <Field
                type='password'
                name='confirmNewPassword'
                placeholder='Подтверждение пароля'
                Icon={Lock}
                isPassword
                className='w-96'
              />
            </div>
          </div>
          <Button type='submit' className={styles.change_password_btn}>
            Изменить пароль
          </Button>
        </form>
      </div>
    </div>
  );
};
