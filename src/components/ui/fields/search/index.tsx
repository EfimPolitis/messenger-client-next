'use client';

import { SearchIcon, X } from 'lucide-react';
import { Dispatch, type InputHTMLAttributes, useEffect, useRef } from 'react';

import { useDebounce } from '@/hooks/useDebounce';

import styles from './index.module.scss';

interface ISearch {
  placeholder: string;
  search: string;
  setSearch: Dispatch<string>;
}

export type TypeSearchProps = InputHTMLAttributes<HTMLInputElement> & ISearch;

export const Search = ({
  placeholder,
  search,
  setSearch,
  ...rest
}: TypeSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.search} {...rest}>
      <SearchIcon className={styles.search_icon} />
      <input
        type='text'
        placeholder={placeholder}
        className={styles.search_input}
        value={search}
        ref={inputRef}
        onChange={event => setSearch(event.target.value)}
      />
      {search && (
        <X
          className={styles.close}
          onClick={() => {
            setSearch('');
            if (inputRef.current) inputRef.current.focus();
          }}
        />
      )}
    </div>
  );
};
