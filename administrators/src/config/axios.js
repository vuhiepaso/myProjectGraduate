import axios from 'axios';
import { api } from './keys';

const client = axios.create({
  baseURL: api,
  timeout: 10000
});

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default client;
