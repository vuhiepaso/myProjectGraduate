import axios from 'axios'
import {api} from './keys'
import AsyncStorage from '@react-native-async-storage/async-storage'

const client = axios.create({
  baseURL: api,
  timeout: 10000,
})

client.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')
    // @ts-ignore
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

client.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config
  if (error.response && error.response.status === 401) {
    const token = await AsyncStorage.getItem('token')
    originalRequest.headers.Authorization = `Bearer ${token}`
    return axios(originalRequest)
  }
  return Promise.reject(error)
})

export default client
