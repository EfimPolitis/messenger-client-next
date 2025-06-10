import { ChatsLayout } from '@/components/layouts/chats';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <ChatsLayout>{children}</ChatsLayout>;
}
