import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetBills = () => {
  const url = '/bill/all-admin';
  return useQuery('get-bills', () => axiosClient.get(url));
};

export { GetBills };
