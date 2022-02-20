import * as type from '../constant'

const initialState = {
  user_id: '',
  phone: '',
  email: '',
  email_token: '',
  avatar: '',
  date_of_bird: '',
  full_name: '',
  create_date: '',
  update_date: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.USER_CHANGE:
      return {...state, ...action.user}
    case type.USER_CLEAR:
      return {...state, ...initialState}
    default:
      return state
  }
}
