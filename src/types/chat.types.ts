export interface Chat {
  id: string;
  createdAt: string;
  participants: IParticipant[];
  messages: IMessage[];
}

export interface IParticipant {
  id: string;
  chatId: string;
  user: {
    id: string;
    name: string;
    surname: string;
    avatarPath: string;
  };
}

export interface IMessage {
  id: string;
  text: string;
  filePath: string;
  sender: {
    id: string;
    name: string;
    surname: string;
    avatarPath?: string | null;
  };
  chatId: string;
  chat: {
    id: string;
    createdAt: string;
    participants: {
      id: string;
      chatId: string;
      userId: string;
      user: {
        id: string;
        name: string;
        surname: string;
        email: string;
        avatarPath: string;
      };
    }[];
  };
  groupId: string;
  createdAt: string;
  deletedAt: string;
  deleted: boolean;
}
