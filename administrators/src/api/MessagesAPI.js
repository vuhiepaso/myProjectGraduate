import { useQuery } from 'react-query';
import axiosClient from '../config/axios';

const GetMessages = () => {
  const url = '/message/messages';
  return useQuery('get-messages', () => axiosClient.get(url));
};

export { GetMessages };
