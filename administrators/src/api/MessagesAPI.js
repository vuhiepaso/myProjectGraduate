import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetMessages = (userId) => {
  const url = `/message/messages/${userId}`;
  return useQuery('get-messages', () => axiosClient.get(url));
};

const GetListUser = () => {
  const url = `/message/users`;
  return useQuery('get-list-user', () => axiosClient.get(url));
};

export { GetMessages, GetListUser };
