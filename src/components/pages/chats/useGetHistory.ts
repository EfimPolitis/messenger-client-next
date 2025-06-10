import chatService from '@/services/chat.service';
import { useQuery } from '@tanstack/react-query';

export const useGetHistory = (
  userId: string | undefined,
  chatId: string | undefined
) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['getHistory'],
    queryFn: () => chatService.getHistory(userId, chatId),
  });

  return { data, isLoading, refetch };
};
