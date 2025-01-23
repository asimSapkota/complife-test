import { createRequestClient } from '@/lib/axios';
import { Login } from '../schemas';
import { AxiosResponse } from 'axios';
import { CurrentUser } from '../types';

type BaseResponse<T> = {
  ok: boolean;
  data: T;
  message?: string;
};
type LoginData = {
  user: CurrentUser;
  access_token: string;
  expires_at: string;
};
export type LoginResponse = BaseResponse<LoginData>;

class AuthService {
  private publicApi = createRequestClient(true);

  async login(payload: Login) {
    const response: AxiosResponse<LoginResponse> = await this.publicApi.post(
      '/auth/login',
      payload,
    );
    console.log(response, 'response');
    return response.data;
  }
}

export const authService = new AuthService();
