'use client';

import { PUBLIC_PAGES } from '@/config/pages/public.config';
import authService from '@/services/auth/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export const useLogout = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const [isPending, startTransition] = useTransition();

  const { mutate: mutateLogout, isPending: isLogoutPending } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess() {
      startTransition(() => {
        queryClient.clear();
        push(PUBLIC_PAGES.LOGIN);
      });
    },
  });

  const isLogoutLoading = isLogoutPending || isPending;

  return { mutateLogout, isLogoutLoading };
};
