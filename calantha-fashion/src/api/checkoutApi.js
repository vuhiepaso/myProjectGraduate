import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getDefaultAddress = () => {
  const url = '/address/default'
  return useQuery('address-default', () => axiosClient.get(url))
}

const addBill = () => {
  const url = '/bill/add'
  return useMutation('add-bill', (values) => axiosClient.post(url, values))
}

export {getDefaultAddress, addBill}
