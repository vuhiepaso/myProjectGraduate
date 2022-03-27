import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getOrderBills = () => {
  const url = '/bill/order'
  return useQuery('bill-order', () => axiosClient.get(url))
}

const checkProductExist = () => {
  const url = '/product/exist/'
  return useMutation('order-exist', (product_id) => axiosClient.get(url + product_id))
}

const removeBill = () => {
  const url = '/bill/remove/'
  return useMutation('remove-bill', (bill_id) => axiosClient.delete(url + bill_id))
}

export {getOrderBills, checkProductExist, removeBill}
