import { type TProtectUserData, UserRole } from '@/services/auth/auth.types';

export type TUserDataState = {
  id: string;
  rights: UserRole;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isUser: boolean;
};

export const transformUserToState = (
  user: TProtectUserData
): TUserDataState | null => {
  return {
    ...user,
    isLoggedIn: true,
    isAdmin: user.rights === UserRole.ADMIN,
    isUser: user.rights === UserRole.USER,
  };
};
