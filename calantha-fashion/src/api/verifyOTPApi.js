import {useMutation} from 'react-query'
import axiosClient from '../config/axios'

const verifyOTP = () => {
  const url = '/otp/verify'
  return useMutation('verify-otp', (values) => axiosClient.post(url, values))
}

export {verifyOTP}
