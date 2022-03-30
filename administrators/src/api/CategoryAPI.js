import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetCategories = () => {
  const url = '/category/all-admin';
  return useQuery('get-categories', () => axiosClient.get(url));
};

export { GetCategories };
