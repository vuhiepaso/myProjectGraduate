import {USER_CHANGE, USER_CLEAR} from '../constant'

export const setUser = (email) => ({
  type: USER_CHANGE,
  email,
})

export const clearUser = () => ({
  type: USER_CLEAR,
})
