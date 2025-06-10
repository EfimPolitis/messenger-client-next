'use client';

import clsx from 'clsx';
import ReCAPTCHA from '@/components/ui/ReCAPTCHA';

import styles from './index.module.scss';
import { AuthToggle } from './AuthToggle';

import { SocialMediaButtons } from './SocialMediaButtons';
import { useAuthForm } from './useAuthForm';
import { Field } from '@/components/ui/fields';
import { AtSignIcon, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/buttons/button';
import Link from 'next/link';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { Loader } from '@/components/ui';
import { UndoBtn } from '@/components/ui/buttons/undo';
import { useTheme } from '@/hooks/useTheme';

interface AuthFormProps {
  isLogin: boolean;
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { theme } = useTheme();
  const { handleSubmit, isLoading, onSubmit, onError, recaptchaRef, register } =
    useAuthForm(isLogin);

  return (
    <div className={styles.auth_block}>
      <h2 className='font-semibold text-4xl'>
        {isLogin ? 'Вход' : 'Регистрация'}
      </h2>
      <div className={styles.form_block}>
        <UndoBtn size={32} link={PUBLIC_PAGES.HOME} />
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className={styles.auth_form}
        >
          <p className='text-lg w-full text-center'>
            Заполните поля чтобы продолжить
          </p>
          <div className={styles.fields}>
            {!isLogin && (
              <Field
                placeholder='Имя'
                Icon={User}
                style={{ height: '60px' }}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Имя - обязательное поле',
                  },
                })}
              />
            )}

            {!isLogin && (
              <Field
                placeholder='Фамилия'
                Icon={User}
                {...register('surname', {
                  required: {
                    value: true,
                    message: 'Фамилия - обязательное поле',
                  },
                })}
              />
            )}

            <Field
              placeholder='Эллектронная почта'
              Icon={AtSignIcon}
              type='email'
              {...register('email', {
                required: {
                  value: true,
                  message: 'Эллектронная почта - обязательное поле',
                },
              })}
            />

            <Field
              placeholder='Пароль'
              Icon={Lock}
              type='password'
              isPassword
              {...register('password', {
                required: {
                  value: true,
                  message: 'Пароль - обязательное поле',
                },
              })}
            />

            {!isLogin && (
              <Field
                placeholder='Подтверждение пароля'
                Icon={Lock}
                type='password'
                isPassword
                {...register('confirmPassword', {
                  required: {
                    value: true,
                    message: 'Подтверждение пароля - обязательное поле',
                  },
                })}
              />
            )}
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            size='normal'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            theme={theme}
            className={styles.recaptcha}
          />

          <Button
            type='submit'
            disabled={isLoading}
            className={clsx(
              styles['btn-primary'],
              isLogin ? 'bg-indigo-500' : 'bg-green-500',
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            )}
          >
            {isLoading ? <Loader /> : isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>

          <Link
            href={PUBLIC_PAGES.RESET_PASSWORD}
            className={styles.reset_password_link}
          >
            Забыли пароль?
          </Link>

          <p className='w-full text-center'>Или</p>

          <SocialMediaButtons />

          <AuthToggle isLogin={isLogin} />
        </form>
      </div>
    </div>
  );
}
