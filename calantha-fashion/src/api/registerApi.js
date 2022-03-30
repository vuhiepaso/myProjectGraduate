import {useMutation} from 'react-query'
import axiosClient from '../config/axios'

const register = () => {
  const url = '/user/register'
  return useMutation('register', (values) => axiosClient.post(url, values))
}

const sendMessage = () => {
  const url = '/otp/send'
  return useMutation('register-send-otp-message', (phone) => axiosClient.post(url, {phone}))
}

export {register, sendMessage}
