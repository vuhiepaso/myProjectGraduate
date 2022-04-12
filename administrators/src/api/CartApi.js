import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetCarts = () => {
  const url = '/cart/all-admin';
  return useQuery('get-cart', () => axiosClient.get(url));
};

export { GetCarts };
