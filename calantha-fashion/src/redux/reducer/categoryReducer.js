import { CATEGORY_NAVIGATE_LIST } from '../constant'

const initialState = {
  category: {
    category_id: '',
    category_name: '',
  },
  isNavigateToList: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_NAVIGATE_LIST:
      return { ...state, category: action.payload, isNavigateToList: true }
    default:
      return state
  }
}
