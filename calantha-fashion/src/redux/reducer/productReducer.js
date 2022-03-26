import {PRODUCT_NAVIGATE_PRODUCT_DETAIL} from '../constant'

const initialState = {
  product: {
    product_id: '',
    product_name: '',
  },
  isNavigateToProductDetail: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_NAVIGATE_PRODUCT_DETAIL:
      return {...state, product: action.payload, isNavigateToProductDetail: true}
    default:
      return state
  }
}
