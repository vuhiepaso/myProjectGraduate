import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetProducts = () => {
  const url = '/product/all-admin';
  return useQuery('get-products', () => axiosClient.get(url));
};

export { GetProducts };
