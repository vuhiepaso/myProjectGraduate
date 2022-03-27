import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getAddresses = () => {
  const url = '/address/all'
  return useQuery('get-addresses', () => axiosClient.get(url))
}

const removeAddress = () => {
  const url = '/address/remove/'
  return useMutation('remove-address', (address_id) => axiosClient.delete(url + address_id))
}

export {getAddresses, removeAddress}
