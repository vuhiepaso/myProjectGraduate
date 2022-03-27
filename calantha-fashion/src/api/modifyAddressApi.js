import {useMutation} from 'react-query'
import axiosClient from '../config/axios'

const updateAddress = (address_id) => {
  const url = `/address/update/${address_id}`
  // @ts-ignore
  return useMutation('update-address', (values) => axiosClient.put(url, values))
}

export {updateAddress}
