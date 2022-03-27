import {useMutation} from 'react-query'
import axiosClient from '../config/axios'

const addAddress = () => {
  const url = '/address/add'
  return useMutation('add-address', (values) => axiosClient.post(url, values))
}

export {addAddress}
