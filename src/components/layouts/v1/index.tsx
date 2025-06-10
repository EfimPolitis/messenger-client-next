'use client';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { Menu, MessageSquare, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export const V1Layout = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className={styles.wrap}>
      <aside className={styles.navigation_menu}>
        <div className={styles.top}>
          {/* <Menu /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
          >
            <rect width='50' height='50' rx='8' />
            <path
              d='M29.6818 29.8182H33.1591L36.0739 33.6534L36.8409 34.6761L41.1875 40.4545H37.7102L34.8466 36.6193L34.1307 35.6477L29.6818 29.8182ZM42.2614 24.9091C42.2614 27.6705 41.7628 30.0568 40.7656 32.0682C39.7685 34.0795 38.4006 35.6307 36.6619 36.7216C34.9233 37.8125 32.9375 38.358 30.7045 38.358C28.4716 38.358 26.4858 37.8125 24.7472 36.7216C23.0085 35.6307 21.6406 34.0795 20.6435 32.0682C19.6463 30.0568 19.1477 27.6705 19.1477 24.9091C19.1477 22.1477 19.6463 19.7614 20.6435 17.75C21.6406 15.7386 23.0085 14.1875 24.7472 13.0966C26.4858 12.0057 28.4716 11.4602 30.7045 11.4602C32.9375 11.4602 34.9233 12.0057 36.6619 13.0966C38.4006 14.1875 39.7685 15.7386 40.7656 17.75C41.7628 19.7614 42.2614 22.1477 42.2614 24.9091ZM39.1932 24.9091C39.1932 22.642 38.8139 20.7287 38.0554 19.169C37.3054 17.6094 36.2869 16.429 35 15.6278C33.7216 14.8267 32.2898 14.4261 30.7045 14.4261C29.1193 14.4261 27.6832 14.8267 26.3963 15.6278C25.1179 16.429 24.0994 17.6094 23.3409 19.169C22.5909 20.7287 22.2159 22.642 22.2159 24.9091C22.2159 27.1761 22.5909 29.0895 23.3409 30.6491C24.0994 32.2088 25.1179 33.3892 26.3963 34.1903C27.6832 34.9915 29.1193 35.392 30.7045 35.392C32.2898 35.392 33.7216 34.9915 35 34.1903C36.2869 33.3892 37.3054 32.2088 38.0554 30.6491C38.8139 29.0895 39.1932 27.1761 39.1932 24.9091Z'
              fill='white'
            />
            <path
              d='M17 16H8'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
            />
            <path
              d='M15 25H4'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
            />
            <path
              d='M17 34H8'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </div>
        <div className={styles.middle}>
          <Link
            href={PUBLIC_PAGES.SEARCH}
            className={clsx(styles.link, {
              [styles.active]: pathname.includes(PUBLIC_PAGES.SEARCH),
            })}
          >
            <Users />
          </Link>
          <Link
            href={PUBLIC_PAGES.CHATS}
            className={clsx(styles.link, {
              [styles.active]: pathname.includes(PUBLIC_PAGES.CHATS),
            })}
          >
            <MessageSquare />
          </Link>
        </div>
        <div className={styles.bottom}>
          <Link
            href={`${PUBLIC_PAGES.SETTINGS}`}
            className={clsx(styles.link, styles.settings, {
              [styles.active]: pathname.includes(PUBLIC_PAGES.SETTINGS),
            })}
          >
            <Settings className={styles.icon} />
          </Link>
        </div>
      </aside>
      <div>{props.children}</div>
    </div>
  );
};
