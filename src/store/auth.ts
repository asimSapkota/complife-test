import { CurrentUser } from '@/app/auth/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthStore = {
  user: null | CurrentUser;
  login: (payload: CurrentUser, token: string) => void;
  logout: () => void;
};

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      user: null,
      login: (payload: CurrentUser, token: string) => {
        set(() => ({ user: payload }));
        localStorage.setItem('accessToken', token);
      },

      logout: () => {
        set(() => ({ user: null }));
        localStorage.removeItem('accessToken');
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
