import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getProduct = (product_id) => {
  const url = `/product/detail/${product_id}`
  return useQuery('get-product-detail', () => axiosClient.get(url))
}

const addToCart = () => {
  const url = `/cart/add`
  return useMutation('add-tp-products', (values) => axiosClient.post(url, values))
}

export {getProduct, addToCart}
