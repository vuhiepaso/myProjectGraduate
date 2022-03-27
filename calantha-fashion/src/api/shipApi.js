import { useMutation, useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getShipBills = () => {
  const url = '/bill/ship'
  return useQuery('bill-ship', () => axiosClient.get(url))
}

const checkProductExist = () => {
  const url = '/product/exist/'
  return useMutation('ship-exist', (product_id) => axiosClient.get(url + product_id))
}

export { getShipBills, checkProductExist }
