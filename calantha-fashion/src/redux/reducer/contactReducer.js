import { USER_NAVIGATE_CONTACT } from '../constant'

const initialState = {
  contact: {
    avatar: '',
    user_id: '',
  },
  isNavigateToContact: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_NAVIGATE_CONTACT:
      return { ...state, contact: action.payload, isNavigateToContact: true }
    default:
      return state
  }
}
