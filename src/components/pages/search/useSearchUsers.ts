import { PUBLIC_PAGES } from '@/config/pages/public.config';
import chatService from '@/services/chat.service';
import userService from '@/services/user.service';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useSearchUsers = (debounceSearch: string) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['searchUsers', debounceSearch],
    queryFn: () => userService.searchUsers(debounceSearch),
  });

  return { data: data?.data, isLoading, isFetching, refetch };
};

export const useStartChat = () => {
  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['createChat'],
    mutationFn: ({ user1Id, user2Id }: { user1Id: string; user2Id: string }) =>
      chatService.createChat(user1Id, user2Id),
    onSuccess(data) {
      push(`${PUBLIC_PAGES.CHATS}/${data.data.id}`);
    },
    onError() {
      toast.error('При создании чата возникла ошибка');
    },
  });

  return { startChat: mutate };
};
