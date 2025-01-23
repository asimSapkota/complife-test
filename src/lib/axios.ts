import { env } from '@/config/env';
import Axios from 'axios';

export const createRequestClient = (isPublic = false) => {
  const axios = Axios.create({
    url: env.VITE_API_URL,
  });

  axios.interceptors.request.use((config) => {
    config.baseURL = import.meta.env.VITE_API_URL;
    if (!isPublic) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.AccessToken = accessToken;
      }
    }

    return config;
  });

  axios.interceptors.response.use((response) => {
    // @ts-ignore
    // const accessToken = response.body?.data?.accessToken;
    // if (accessToken) {
    //   localStorage.setItem("accessToken", accessToken);
    // }
    return response;
  });

  return axios;
};
