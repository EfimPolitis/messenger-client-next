import { SettingsLayout } from '@/components/layouts/settings';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return <SettingsLayout>{children}</SettingsLayout>;
}
