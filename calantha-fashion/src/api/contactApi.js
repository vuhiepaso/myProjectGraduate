import {useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getMessage = (setMessage) => {
  const url = '/message/messages'
  return useQuery('get-message', () => axiosClient.get(url), {
    onSuccess: (e) => setMessage(e),
  })
}

export {getMessage}
