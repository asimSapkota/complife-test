import { useMutation } from '@tanstack/react-query';
import { Login } from '../schemas';
import { authService, LoginResponse } from '../services';
import { AxiosError } from 'axios';

export const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<LoginResponse>, Login>({
    mutationFn: (request: Login): Promise<LoginResponse> =>
      authService.login(request),
  });
};
