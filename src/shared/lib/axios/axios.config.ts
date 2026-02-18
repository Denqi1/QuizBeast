import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  method: 'GET',
  baseURL: API_BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});
