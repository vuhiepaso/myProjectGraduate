import {
  USER_CHANGE_AFTER_GOOGLE_REGISTER,
  USER_CHANGE_AFTER_REGISTER,
  USER_NAVIGATE_PAGE,
  USER_CHANGE_AFTER_PREVIEW,
  USER_CLEAR,
} from '../constant'

const initialState = {
  user: {
    phone: '',
    password: '',
    email: '',
    otp_token: '',
    navigate: '',
    avatar: '',
  },
  isAfterGoogleRegister: false,
  isAfterRegister: false,
  isNavigatePage: false,
  isAfterPreview: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CHANGE_AFTER_GOOGLE_REGISTER:
      return {...state, user: action.payload, isAfterGoogleRegister: true}
    case USER_CHANGE_AFTER_REGISTER:
      return {...state, user: action.payload, isAfterRegister: true}
    case USER_NAVIGATE_PAGE:
      return {...state, user: action.payload, isNavigatePage: true}
    case USER_CHANGE_AFTER_PREVIEW:
      return {...state, user: action.payload, isAfterPreview: true}
    case USER_CLEAR:
      return {...initialState}
    default:
      return state
  }
}
