import { PRODUCT_NAVIGATE_PRODUCT_DETAIL } from '../constant'

const setNavigateProduct = (product) => ({
  type: PRODUCT_NAVIGATE_PRODUCT_DETAIL,
  payload: product,
})

export { setNavigateProduct }
