import type { Metadata } from 'next';
import { AuthForm } from '@/components/frames/forms/auth-form';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-neutral-900 p-8 rounded-lg shadow-md'>
        <AuthForm isLogin />
      </div>
    </div>
  );
}
