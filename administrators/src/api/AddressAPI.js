import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetAddress = () => {
  const url = '/address/all-admin';
  return useQuery('get-addresses', () => axiosClient.get(url));
};

export { GetAddress };
