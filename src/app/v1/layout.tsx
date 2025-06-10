import { V1Layout } from '@/components/layouts/v1';
import { UserRole } from '@/services/auth/auth.types';
import { protectPage } from '@/utils/server/protect-page';
import { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren<unknown>) {
  await protectPage(UserRole.USER);

  return <V1Layout>{children}</V1Layout>;
}
