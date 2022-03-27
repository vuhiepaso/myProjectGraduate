import { combineReducers } from 'redux'
import user from './userReducer'
import product from './productReducer'
import category from './categoryReducer'
import address from './addressReducer'
import contact from './contactReducer'
import bill from './billReducer'

export default combineReducers({
  user,
  product,
  category,
  address,
  contact,
  bill,
})
