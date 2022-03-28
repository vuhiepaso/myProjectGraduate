import { useMutation, useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getCarts = () => {
  const url = '/cart/all'
  return useQuery('get-carts', () => axiosClient.get(url))
}

const removeCart = () => {
  const url = '/cart/remove/'
  return useMutation('remove-cart', (cart_id) => axiosClient.delete(url + cart_id))
}

const increaseProduct = () => {
  const url = '/cart/increase/'
  return useMutation('increase-product', (cart_id) => axiosClient.put(url + cart_id))
}

const decreaseProduct = () => {
  const url = '/cart/decrease/'
  return useMutation('decrease-product', (cart_id) => axiosClient.put(url + cart_id))
}

export { getCarts, removeCart, increaseProduct, decreaseProduct }
