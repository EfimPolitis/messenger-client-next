import chatService from '@/services/chat.service';
import { useQuery } from '@tanstack/react-query';

export const useGetChatList = (userId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getChatList', userId],
    queryFn: () => chatService.getChatList(userId),
  });

  return { chats: data?.data, isLoading };
};
