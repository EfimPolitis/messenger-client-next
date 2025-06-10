import { instance } from '@/api/axios';
import { Chat, IMessage } from '@/types/chat.types';

class ChatService {
  private _BASE_URL = '/chat';

  async createChat(user1Id: string, user2Id: string) {
    return instance.post<{ id: string }>(`${this._BASE_URL}`, {
      participantIds: [user1Id, user2Id],
    });
  }

  async getChatList(userId: string) {
    return instance.get<Chat[]>(`${this._BASE_URL}/${userId}`);
  }

  async getHistory(userId: string | undefined, chatId: string | undefined) {
    if (!userId || !chatId) return;

    return instance.get<IMessage[]>(
      `${this._BASE_URL}/${userId}/${chatId}/messages`
    );
  }
}

export default new ChatService();
