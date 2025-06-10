'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Search } from '@/components/ui/fields/search';
import styles from './index.module.scss';
import { useDebounce } from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import userService from '@/services/user.service';
import { useSearchUsers, useStartChat } from './useSearchUsers';
import { IUser } from '@/types/types';
import { Loader } from '@/components/ui';
import { useProfile } from '@/hooks/useProfile';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface User {
  id: string;
  name: string;
  surname: string;
  avatarPath?: string | null;
  email?: string;
}

export const SearchPage = () => {
  const { user } = useProfile();
  const userId = user.id;

  const [users, setUsers] = useState<IUser[] | undefined>(undefined);

  const [debounceSearch, search, setSearch] = useDebounce('', 500);
  const { data, isLoading, refetch } = useSearchUsers(debounceSearch);

  const { startChat } = useStartChat();

  useEffect(() => {
    setUsers(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [debounceSearch]);

  return (
    <div className={styles.search_page}>
      <div className={styles.search_block}>
        <h2 className='text-xl font-semibold mb-4'>Найти пользователя</h2>
        <div className={styles.search_field}>
          <Search
            placeholder='Введите фамилию, имя или email'
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className={styles.users_list}>
          {isLoading ? (
            <Loader />
          ) : !users?.length && debounceSearch.length ? (
            <h1>Данный пользователь не был найден</h1>
          ) : (
            users?.map(user => (
              <div key={user.id} className={styles.user}>
                {user.avatarPath?.length ? (
                  <Image
                    className={styles.avatar}
                    src={user.avatarPath}
                    alt='avatar image'
                    width={50}
                    height={50}
                  />
                ) : (
                  <div className={styles.avatar}>
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className={styles.info}>
                  <div className='font-medium'>
                    {user.name} {user.surname}
                  </div>
                  {user.email && (
                    <div className='text-sm text-gray-500'>{user.email}</div>
                  )}
                </div>
                <button
                  className={styles.start_chat_btn}
                  onClick={() =>
                    // @ts-ignore
                    startChat({ user1Id: userId, user2Id: user.id })
                  }
                  title='Начать чат'
                >
                  <ArrowRight />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
