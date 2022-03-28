import { useMutation } from 'react-query'
import axiosClient from '../config/axios'

const recoveryEmail = () => {
  const url = '/user/recovery-email/'
  return useMutation('recovery-email', (values) => axiosClient.put(url, values))
}

export { recoveryEmail }
