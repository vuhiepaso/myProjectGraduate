import { useMutation, useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getPackBills = () => {
  const url = '/bill/pack'
  return useQuery('bill-pack', () => axiosClient.get(url))
}

const checkProductExist = () => {
  const url = '/product/exist/'
  return useMutation('pack-exist', (product_id) => axiosClient.get(url + product_id))
}

export { getPackBills, checkProductExist }
