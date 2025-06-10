'use client';

import { Undo2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';

import styles from './index.module.scss';

interface IUndoBtn {
  style?: CSSProperties;
  size?: number;
  link?: string;
}

export const UndoBtn = ({ style, size, link }: IUndoBtn) => {
  const { back, push } = useRouter();
  return (
    <button
      onClick={() => (link ? push(link) : back())}
      className={styles.undo_btn}
      style={style}
    >
      <Undo2 size={size} />
    </button>
  );
};
