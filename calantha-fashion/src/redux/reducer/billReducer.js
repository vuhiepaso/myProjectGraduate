import { CART_NAVIGATE_CHECKOUT } from '../constant'

const initialState = {
  bill: [],
  total: 0,
  isCheckout: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CART_NAVIGATE_CHECKOUT:
      return { ...state, total: action.payload.total, bill: action.payload.bill, isCheckout: true }
    default:
      return state
  }
}
