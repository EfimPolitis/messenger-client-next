import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { redirect } from 'next/navigation';

export default function Page() {
  return redirect(PUBLIC_PAGES.SETTINGS_PROFILE);
}
