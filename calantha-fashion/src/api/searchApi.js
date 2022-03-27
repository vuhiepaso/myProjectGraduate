import {useMutation, useQuery} from 'react-query'
import axiosClient from '../config/axios'

const getSearchHistory = (size) => {
  const url = `/history/all?size=${size}`
  return useQuery('search-history', () => axiosClient.get(url))
}

const getSearchSuggest = (size) => {
  const url = `/product/suggest?size=${size}`
  return useQuery('search-suggest', () => axiosClient.get(url))
}

const getSearches = (search, size) => {
  const url = `/product/search?size=${size}&search=${search}`
  return useQuery('get-searches', () => axiosClient.get(url))
}

const addSearch = () => {
  const url = '/history/add'
  return useMutation('add-search-history', (values) => axiosClient.post(url, values))
}

const removeSearch = () => {
  const url = '/history/remove/'
  return useMutation('remove-search-history', (history_id) => axiosClient.delete(url + history_id))
}

const addToFavorite = () => {
  const url = `/favorite/add`
  return useMutation('search-add-to-favorite', (values) => axiosClient.put(url, values))
}
const removeToFavorite = () => {
  const url = `/favorite/remove`
  return useMutation('search-remove-to-favorite', (values) => axiosClient.put(url, values))
}

export {
  getSearchHistory,
  getSearchSuggest,
  getSearches,
  addSearch,
  removeSearch,
  addToFavorite,
  removeToFavorite,
}
