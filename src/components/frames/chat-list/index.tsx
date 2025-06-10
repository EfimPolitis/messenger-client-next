'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';
import styles from './index.module.scss';
import { useGetChatList } from './useGetChatList';
import { useProfile } from '@/hooks/useProfile';
import { Loader } from '@/components/ui';
import clsx from 'clsx';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import Image from 'next/image';

export const ChatList = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const selectedChatId = pathname?.split('/').pop(); // crude but works if path is /chat/[chatId]

  const { user } = useProfile();

  const { chats, isLoading } = useGetChatList(user?.id as string);

  return (
    <div className={styles.chat_list}>
      <div className='p-4 font-semibold'>Чаты</div>
      <div className={styles.chats}>
        {isLoading ? (
          <Loader style={{ marginTop: '20px' }} size={28} />
        ) : chats?.length ? (
          chats.map(chat => {
            const lastMsg = chat.messages[0];
            const participants = chat.participants;
            const companion =
              participants?.find(p => p.user.id !== user.id)?.user || null;
            return (
              <div
                key={chat.id}
                className={clsx(styles.chat, {
                  [styles.active]: selectedChatId === chat.id,
                })}
                onClick={() => push(`${PUBLIC_PAGES.CHATS}/${chat.id}`)}
              >
                <div className={styles.info}>
                  {companion?.avatarPath?.length ? (
                    <Image
                      src={companion?.avatarPath}
                      alt='avatar image'
                      width={50}
                      height={50}
                      className={styles.avatar}
                    />
                  ) : (
                    <div className={styles.avatar}>
                      {companion?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <div
                      className={styles.name}
                    >{`${companion?.name} ${companion?.surname}`}</div>
                    {lastMsg && (
                      <div className={styles.message}>
                        {lastMsg.text.length <= 18
                          ? lastMsg.text.slice(0, 18) + '...'
                          : lastMsg.text}
                      </div>
                    )}
                  </div>
                  {lastMsg && (
                    <div className={styles.time}>
                      {new Date(lastMsg.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className='mt-5'>У вас пока нет чатов</p>
        )}
      </div>
    </div>
  );
};
