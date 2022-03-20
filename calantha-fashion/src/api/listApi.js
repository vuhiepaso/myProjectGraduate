import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getListProduct = (category_id, size) => {
  const url = `/product/list/${category_id}?size=${size}`
  return useQuery('list-product', () => axiosClient.get(url))
}
const addToFavorite = () => {
  const url = `/favorite/add`
  return useMutation('list-add-to-favorite', (values) => axiosClient.put(url, values))
}
const removeToFavorite = () => {
  const url = `/favorite/remove`
  return useMutation('list-remove-to-favorite', (values) => axiosClient.put(url, values))
}
const addToCart = () => {
  const url = `/cart/add`
  return useMutation('list-add-tp-products', (values) => axiosClient.put(url, values))
}

export {getListProduct, addToFavorite, removeToFavorite, addToCart}
