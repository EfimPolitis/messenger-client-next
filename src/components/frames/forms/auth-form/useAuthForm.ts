import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useRef, useTransition } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import authService from '@/services/auth/auth.service';
import type {
  IAuthLoginFormData,
  IAuthRegisterFormDate,
} from '@/types/auth.types';
import { PUBLIC_PAGES } from '@/config/pages/public.config';

export function useAuthForm(isLogin: boolean) {
  const { register, handleSubmit, reset } = useForm<
    IAuthLoginFormData | IAuthRegisterFormDate
  >();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: IAuthLoginFormData) =>
      authService.main('login', data, recaptchaRef?.current?.getValue()),
    onSuccess() {
      startTransition(() => {
        reset();
        router.push(PUBLIC_PAGES.CHATS);
      });
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
      recaptchaRef.current?.reset();
    },
  });

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: IAuthRegisterFormDate) =>
      authService.main('register', data, recaptchaRef?.current?.getValue()),
    onSuccess() {
      startTransition(() => {
        reset();
        router.push(PUBLIC_PAGES.CHATS);
      });
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
      recaptchaRef.current?.reset();
    },
  });

  const onSubmit: SubmitHandler<
    IAuthLoginFormData | IAuthRegisterFormDate
  > = data => {
    const token = recaptchaRef?.current?.getValue();

    if (!token) {
      toast.error('Пройдите капчу!');
      return;
    }

    isLogin
      ? mutateLogin(data as IAuthLoginFormData)
      : mutateRegister(data as IAuthRegisterFormDate);
  };

  const onError = (
    errors: FieldErrors<IAuthRegisterFormDate | IAuthLoginFormData>
  ) => {
    const errorsKeys = Object.keys(errors) as Array<
      keyof IAuthRegisterFormDate | IAuthLoginFormData
    >;
    errorsKeys.forEach(error => {
      //@ts-ignore
      toast.error(`${errors[error]?.message}`);
    });
  };

  const isLoading = isPending || isLoginPending || isRegisterPending;

  return {
    register,
    handleSubmit,
    onSubmit,
    onError,
    recaptchaRef,
    isLoading,
  };
}
