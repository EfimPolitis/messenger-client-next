'use client';

import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { Brush, ShieldUser, User, UserCog } from 'lucide-react';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import Image from 'next/image';
import { useProfile } from '@/hooks/useProfile';
import { Loader } from '@/components/ui';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const SettingsLayout = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const profile = useProfile();

  return (
    <div className={styles.settings_layout}>
      <div className={styles.submenu}>
        <div className={styles.profile}>
          {profile.isLoading ? (
            <div className={styles.avatar}>
              <Loader />
            </div>
          ) : profile?.user?.avatarPath ? (
            <Image
              src={profile.user.avatarPath}
              alt='profile image'
              className={styles.avatar}
              width={60}
              height={60}
            />
          ) : (
            <div className={styles.avatar}>{profile.user.name?.charAt(0)}</div>
          )}
          <span>{profile.user.name}</span>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                href={PUBLIC_PAGES.SETTINGS_PROFILE}
                className={clsx(styles.link, {
                  [styles.active]: pathname === PUBLIC_PAGES.SETTINGS_PROFILE,
                })}
              >
                <User size={28} />
                <span>Профиль</span>
              </Link>
            </li>
            <li>
              <Link
                href={PUBLIC_PAGES.SETTINGS_APPEARANCE}
                className={clsx(styles.link, {
                  [styles.active]:
                    pathname === PUBLIC_PAGES.SETTINGS_APPEARANCE,
                })}
              >
                <Brush size={28} />
                <span>Внешний вид</span>
              </Link>
            </li>
            <li>
              <Link
                href={PUBLIC_PAGES.SETTINGS_SECURITY}
                className={clsx(styles.link, {
                  [styles.active]: pathname === PUBLIC_PAGES.SETTINGS_SECURITY,
                })}
              >
                <ShieldUser size={28} />
                <span>Безопасность</span>
              </Link>
            </li>
            <li>
              <Link
                href={PUBLIC_PAGES.SETTINGS_ACCOUNT}
                className={clsx(styles.link, {
                  [styles.active]: pathname === PUBLIC_PAGES.SETTINGS_ACCOUNT,
                })}
              >
                <UserCog size={28} />
                <span>Учётная запись</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.page}>{props.children}</div>
    </div>
  );
};
