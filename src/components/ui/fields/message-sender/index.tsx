import { SendHorizonal } from 'lucide-react';
import styles from './index.module.scss';
import { Dispatch, SetStateAction } from 'react';

type TMessageSender = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  sendMessage: () => void;
};

export const MessageSender = ({
  inputValue,
  setInputValue,
  onKeyDown,
  sendMessage,
}: TMessageSender) => {
  return (
    <div className={styles.message_sender}>
      <div className={styles.field}>
        <input
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder='Напишите сообщение...'
          className={styles.input}
        />
      </div>
      <button onClick={sendMessage} className={styles.sender_btn}>
        <SendHorizonal size={28} />
      </button>
    </div>
  );
};
