import {combineReducers} from 'redux'
import user from './userReducer'
import category from './categoryReducer'
import product from './productReducer'

export default combineReducers({
  user,
  category,
  product,
})
