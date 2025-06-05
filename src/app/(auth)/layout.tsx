import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';

export default async function AuthLayout({
  children,
}: PropsWithChildren<unknown>) {
  const user = await getServerAuth();

  if (user?.isLoggedIn) return redirect(PUBLIC_PAGES.CHATS);

  return children;
}
