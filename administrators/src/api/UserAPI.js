import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetUsers = () => {
  const url = '/user/all-admin';
  return useQuery('get-users', () => axiosClient.get(url));
};

const GetCurrentUser = () => {
  const url = '/user/information';
  return useQuery('get-user-detail', () => axiosClient.get(url));
};

export { GetUsers, GetCurrentUser };
