import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetHistories = () => {
  const url = '/history/all-admin';
  return useQuery('get-histories', () => axiosClient.get(url));
};

export { GetHistories };
