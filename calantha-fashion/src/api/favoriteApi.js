import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getFavoriteProduct = (size) => {
  const url = `/favorite/all?size=${size}`
  return useQuery('get-favorite-product', () => axiosClient.get(url))
}
const addToFavorite = () => {
  const url = `/favorite/add`
  return useMutation('favorite-add-to-favorite', (values) => axiosClient.put(url, values))
}
const removeToFavorite = () => {
  const url = `/favorite/remove`
  return useMutation('favorite-remove-to-favorite', (values) => axiosClient.put(url, values))
}

export {getFavoriteProduct, addToFavorite, removeToFavorite}
