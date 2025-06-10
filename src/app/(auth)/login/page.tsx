import type { Metadata } from 'next';
import { AuthForm } from '@/components/frames/forms/auth-form';
import styles from './style.module.scss';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className={styles.login_page}>
      <AuthForm isLogin />
    </div>
  );
}
