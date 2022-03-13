import { useMutation, useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getCategories = () => {
  const url = '/category/all'
  return useQuery('dashboard-categories', () => axiosClient.get(url))
}
const getProducts = (size) => {
  const url = `/product/list/hot-deal?size=${size}`
  return useQuery('dashboard-products', () => axiosClient.get(url))
}
const addToFavorite = () => {
  const url = `/favorite/add`
  return useMutation('add-to-favorite', (values) => axiosClient.put(url, values))
}
const removeToFavorite = () => {
  const url = `/favorite/remove`
  return useMutation('remove-to-favorite', (values) => axiosClient.put(url, values))
}
const addToCart = () => {
  const url = `/cart/add`
  return useMutation('add-tp-products', (values) => axiosClient.put(url, values))
}

export { getCategories, getProducts, addToFavorite, removeToFavorite, addToCart }
