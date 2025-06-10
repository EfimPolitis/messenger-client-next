import type { Metadata } from 'next';
import { AuthForm } from '@/components/frames/forms/auth-form';
import styles from './style.module.scss';

export const metadata: Metadata = {
  title: 'Register',
};

export default function RegisterPage() {
  return (
    <div className={styles.register_page}>
      <AuthForm isLogin={false} />
    </div>
  );
}
