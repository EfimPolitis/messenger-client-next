'use client';

import clsx from 'clsx';
import ReCAPTCHA from '@/components/ui/ReCAPTCHA';

import styles from './index.module.scss';
import { AuthToggle } from './AuthToggle';

import { SocialMediaButtons } from './SocialMediaButtons';
import { useAuthForm } from './useAuthForm';
import { Field } from '@/components/ui/fields';
import { AtSignIcon, Lock, User } from 'lucide-react';

interface AuthFormProps {
  isLogin: boolean;
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { handleSubmit, isLoading, onSubmit, recaptchaRef, register } =
    useAuthForm(isLogin);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-sm mx-auto'>
      <h2 className='font-semibold mb-4'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
      <p>Заполните поля чтобы продолжить</p>
      <div className={styles.fields}>
        {!isLogin && <Field placeholder='Имя' Icon={User} />}
        {!isLogin && <Field placeholder='Фамилия' Icon={User} />}
        <Field placeholder='Эллектронная почта' Icon={AtSignIcon} />
        <Field placeholder='Пароль' Icon={Lock} />
        {!isLogin && <Field placeholder='Подтверждение пароля' Icon={Lock} />}
      </div>
      {/* <div className='mb-4'>
        <label className='text-gray-600'>
          Email
          <input
            type='email'
            placeholder='Enter email: '
            {...register('email', { required: true })}
            className={clsx(
              styles['input-field'],
              'w-full p-2 border rounded focus:outline-none focus:border-indigo-500'
            )}
          />
        </label>
      </div>

      <div className='mb-4'>
        <label className='text-gray-600'>
          Пароль
          <input
            type='password'
            placeholder='Enter password: '
            {...register('password', { required: true })}
            className={clsx(
              styles['input-field'],
              'w-full p-2 border rounded focus:outline-none focus:border-indigo-500'
            )}
          />
        </label>
      </div>

       */}

      <ReCAPTCHA
        ref={recaptchaRef}
        size='normal'
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
        theme='light'
        className={styles.recaptcha}
      />

      {/* <div className='mb-3'>
        <button
          type='submit'
          className={clsx(
            styles['btn-primary'],
            isLogin ? 'bg-indigo-500' : 'bg-green-500',
            isLoading ? 'opacity-75 cursor-not-allowed' : ''
          )}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </div> */}

      <SocialMediaButtons />

      <AuthToggle isLogin={isLogin} />
    </form>
  );
}
