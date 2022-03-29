import { useMutation } from 'react-query'
import axiosClient from '../config/axios'

const sendMessage = () => {
  const url = '/otp/send'
  return useMutation('send-otp-message', (phone) => axiosClient.post(url, { phone }))
}

export { sendMessage }
