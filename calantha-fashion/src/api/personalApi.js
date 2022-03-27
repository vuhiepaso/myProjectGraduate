import { useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getUserInformation = () => {
  const url = '/user/information'
  return useQuery('user-information', () => axiosClient.get(url))
}

const getBadges = () => {
  const url = '/bill/badge'
  return useQuery('get-badges', () => axiosClient.get(url))
}

export { getUserInformation, getBadges }
