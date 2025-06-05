'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { saveTokenStorage } from '@/services/auth/auth.helper';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { translations } from './i18n';

export default function SocialAuthPage() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (accessToken) saveTokenStorage(accessToken);

    router.replace('/chats');
  }, []);

  return <div>{translations[language].loading}</div>;
}
