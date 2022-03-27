import {
  USER_CHANGE_AFTER_GOOGLE_REGISTER,
  USER_CHANGE_AFTER_REGISTER,
  USER_NAVIGATE_PAGE,
  USER_CLEAR,
} from '../constant'

const setUserAfterGoogleRegister = (user) => ({
  type: USER_CHANGE_AFTER_GOOGLE_REGISTER,
  payload: user,
})

const setUserAfterRegister = (user) => ({
  type: USER_CHANGE_AFTER_REGISTER,
  payload: user,
})

const setUserNavigatePage = (user) => ({
  type: USER_NAVIGATE_PAGE,
  payload: user,
})

const clearUser = () => ({
  type: USER_CLEAR,
})

export { setUserAfterGoogleRegister, setUserAfterRegister, setUserNavigatePage, clearUser }
