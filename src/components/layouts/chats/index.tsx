import React from 'react';
import styles from './index.module.scss';
import { ChatList } from '@/components/frames/chat-list';

export const ChatsLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.chat_page}>
      <div className={styles.chat_list}>
        <ChatList />
      </div>
      <div className={styles.chat}>{props.children}</div>
    </div>
  );
};
