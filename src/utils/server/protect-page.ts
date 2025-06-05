'use server';

import { UserRole } from '@/services/auth/auth.types';
import { getServerAuth } from '@/utils/server/get-server-auth';
import { notFound, redirect } from 'next/navigation';

export const protectPage = async (role: UserRole = UserRole.USER) => {
  const user = await getServerAuth();

  if (!user) {
    return notFound();
  } else {
    return true;
  }
};
