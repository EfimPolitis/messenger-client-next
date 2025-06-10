'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams } from 'next/navigation';
import { useSocket } from '@/hooks/useSocket';
import { MessageSender } from '@/components/ui/fields';
import { IMessage, IParticipant } from '@/types/chat.types';
import { useGetHistory } from './useGetHistory';
import { useProfile } from '@/hooks/useProfile';
import styles from './index.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

export const ChatPage = () => {
  const params = useParams();
  const chatId = params.chatId as string;

  const { user } = useProfile();
  const userId = user.id;

  const [companion, setCompanion] = useState<{
    id: string;
    name: string;
    surname: string;
    avatarPath: string;
  } | null>(null);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  const socket = useSocket(chatId as string);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, refetch } = useGetHistory(userId, chatId);

  useEffect(() => {
    if (userId && chatId) refetch();
  }, [chatId, userId]);

  // Fetch history
  useEffect(() => {
    const participants = data?.data[0]?.chat?.participants as IParticipant[];
    const otherUser =
      participants?.find(p => p.user.id !== userId)?.user || null;
    setCompanion(otherUser);
    setMessages(data?.data as IMessage[]);
    // scroll to bottom after loading
    setTimeout(
      () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
      100
    );
  }, [chatId, data]);

  // Listen for incoming messages
  useEffect(() => {
    if (!socket) return;
    const handler = (msg: IMessage) => {
      setMessages(prev => [...prev, msg]);
      // scroll to bottom
      setTimeout(
        () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
        50
      );
    };
    socket.on('message', handler);
    return () => {
      socket.off('message', handler);
    };
  }, [socket]);

  const sendMessage = () => {
    const text = inputValue.trim();
    if (!text || !socket) return;
    socket.emit('message', { chatId, text });
    setInputValue('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className={styles.chat_room}>
      {companion && (
        <div className={styles.header}>
          {companion?.avatarPath?.length ? (
            <Image
              src={companion.avatarPath}
              alt='avatar image'
              height={50}
              width={50}
              className={styles.avatar}
            />
          ) : (
            <div className={styles.avatar}>
              {companion.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <div className={styles.name}>
              <p>
                {companion.name} {companion.surname}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className={styles.message_area}>
        {messages?.map(msg => (
          <div
            key={msg.id}
            className={clsx(styles.message_block, {
              [styles.sender]: msg.sender.id === userId,
              [styles.receiver]: msg.sender.id !== userId,
            })}
          >
            <div className={styles.message}>
              <div className={styles.content}>{msg.text}</div>
              <div className={styles.time}>
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <MessageSender
        inputValue={inputValue}
        setInputValue={setInputValue}
        onKeyDown={onKeyDown}
        sendMessage={sendMessage}
      />
    </div>
  );
};
