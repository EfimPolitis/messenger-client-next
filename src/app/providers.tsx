'use client';

import { LanguageLayout } from '@/components/layouts/language';
import { ThemeLayout } from '@/components/layouts/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { domAnimation, LazyMotion } from 'framer-motion';
import { PropsWithChildren, useState } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return (
    <LazyMotion features={domAnimation}>
      <QueryClientProvider client={client}>
        <LanguageLayout>
          <ThemeLayout>{children}</ThemeLayout>
        </LanguageLayout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LazyMotion>
  );
}
