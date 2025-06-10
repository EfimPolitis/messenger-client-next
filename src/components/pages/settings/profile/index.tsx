'use client';

import { Field } from '@/components/ui/fields';
import styles from './index.module.scss';
import { useProfile } from '@/hooks/useProfile';
import Image from 'next/image';
import { Button } from '@/components/ui/buttons/button';
import { Building2, ImageDown, LogOut, User } from 'lucide-react';
import { DateInput } from '@/components/ui/fields/date-input';
import { TextArea } from '@/components/ui/fields/text-area';
import { useRef } from 'react';
import { Loader } from '@/components/ui';
import { useLogout } from '@/hooks/useLogout';

export const SettingsProfilePage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutateLogout, isLogoutLoading } = useLogout();
  const { user, isLoading } = useProfile();

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Профиль</h1>
      <hr className={styles.line} />
      <form className={styles.profile_form}>
        <div className={styles.field_block}>
          <label htmlFor='name'>Имя</label>
          <Field
            name='name'
            placeholder='Имя'
            style={{ width: '400px' }}
            Icon={User}
          />
        </div>
        <div className={styles.field_block}>
          <label htmlFor='surname'>Фамилия</label>
          <Field
            name='surname'
            placeholder='Фамилия'
            style={{ width: '400px' }}
            Icon={User}
          />
        </div>
        <div className={styles.avatar}>
          <label htmlFor='avatar'>Изображение профиля</label>
          {isLoading ? (
            <div className={styles.avatar_image}>
              <Loader size={40} />
            </div>
          ) : user.avatarPath ? (
            <Image
              src={user.avatarPath}
              alt='avatar image'
              width={200}
              height={200}
              className={styles.avatar_image}
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (fileInputRef.current) fileInputRef.current.click();
              }}
            />
          ) : (
            <div className={styles.avatar_image}>{user.name?.charAt(0)}</div>
          )}
          <input
            name='avatar'
            type='file'
            hidden
            accept='image/*'
            ref={fileInputRef}
          />
          <button
            className={styles.btn_download}
            type='button'
            onClick={() => {
              if (fileInputRef.current) fileInputRef.current.click();
            }}
          >
            <ImageDown size={18} />
            <p>Загрузить фотографию</p>
          </button>
        </div>
        <div className={styles.field_block}>
          <label htmlFor='bio'>О себе</label>
          <TextArea
            name='bio'
            placeholder='О себе'
            style={{ width: '800px', height: '200px' }}
          />
        </div>
        <div className={styles.field_block}>
          <label htmlFor='birth'>Дата рождения</label>
          <DateInput name='birth' />
        </div>
        <div className={styles.field_block}>
          <label htmlFor='city'>Город</label>
          <Field
            name='city'
            placeholder='Город'
            style={{ width: '400px' }}
            Icon={Building2}
          />
        </div>
        <div className={styles.btn_block}>
          <Button type='submit' className={styles.update_btn}>
            Обновить
          </Button>
          <Button
            type='button'
            className={styles.logout_btn}
            onClick={() => mutateLogout()}
            disabled={isLogoutLoading}
          >
            <p>{isLogoutLoading ? 'Выходим...' : 'Выйти'}</p>
            <LogOut />
          </Button>
        </div>
      </form>
    </div>
  );
};
