import { instance } from '@/api/axios';
import { IUser } from '@/types/types';

class UserService {
  private _BASE_URL = '/users';

  async fetchProfile() {
    return instance.get<IUser>(`${this._BASE_URL}/profile`);
  }

  async searchUsers(userData: string) {
    if (!userData.length) return;

    return instance.get<IUser[]>(`${this._BASE_URL}/search/${userData}`);
  }
}

export default new UserService();
