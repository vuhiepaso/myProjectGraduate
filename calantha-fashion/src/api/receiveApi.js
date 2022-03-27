import { useMutation, useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getReceiveBills = () => {
  const url = '/bill/receive'
  return useQuery('bill-receive', () => axiosClient.get(url))
}

const checkProductExist = () => {
  const url = '/product/exist/'
  return useMutation('receive-exist', (product_id) => axiosClient.get(url + product_id))
}

export { getReceiveBills, checkProductExist }
