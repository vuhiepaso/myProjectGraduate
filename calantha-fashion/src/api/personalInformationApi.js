import { useMutation, useQuery } from 'react-query'
import axiosClient from '../config/axios'

const getUserInformation = () => {
  const url = '/user/information'
  return useQuery('user-information', () => axiosClient.get(url))
}

const updateUserInformation = () => {
  const url = '/user/update'
  return useMutation('update-user-information', (values) => axiosClient.put(url, values))
}

const getDefaultAddress = () => {
  const url = '/address/default'
  return useQuery('address-default', () => axiosClient.get(url))
}

const sendMessage = () => {
  const url = '/otp/send'
  return useMutation('personal-send-otp-message', (phone) => axiosClient.post(url, { phone }))
}

export { getUserInformation, updateUserInformation, getDefaultAddress, sendMessage }
