import { useMutation } from 'react-query'
import axiosClient from '../config/axios'

const recoveryPassword = () => {
  const url = '/user/recovery-password/'
  return useMutation('recovery-password', (values) => axiosClient.put(url, values))
}

export { recoveryPassword }
