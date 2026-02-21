import axios, { isAxiosError } from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  method: 'GET',
  baseURL: API_BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (isAxiosError(error)) {
      if (!error.response || !error.response.data) {
        console.error(error.message);
      } else {
        console.error(error.response.data.status_message);
      }
    } else if (error instanceof Error) {
      console.error(error.name + ': ' + error.message);
    }

    return Promise.reject(error);
  }
);
