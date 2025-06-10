import { UserRole } from '@/services/auth/auth.types';

export interface IUser {
  id: string;
  name?: string;
  surname?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole;
}

export interface IFormData extends Pick<IUser, 'email'> {
  password: string;
}
