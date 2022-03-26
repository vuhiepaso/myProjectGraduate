import { CART_NAVIGATE_CHECKOUT } from '../constant'

const setNavigateCheckout = (bill) => ({
  type: CART_NAVIGATE_CHECKOUT,
  payload: bill,
})

export { setNavigateCheckout }
