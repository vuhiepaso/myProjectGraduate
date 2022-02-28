import axios from 'axios'
import {apiUrl} from './keys'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getToken(tokenType) {
  try {
    const token = await AsyncStorage.getItem(tokenType)
    if (token) {
      return token
    }
    return 'none'
  } catch (e) {
    return 'none'
  }
}

const client = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  Authorization: `Bearer ${getToken('token')}`,
})

client.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config
  console.log(error)
  if (error.response && error.response.status === 401) {
    const token = await AsyncStorage.getItem('token')
    originalRequest.headers.Authorization = `Bearer ${token}`
    return axios(originalRequest)
  }

  return Promise.reject(error)
})

export default client
