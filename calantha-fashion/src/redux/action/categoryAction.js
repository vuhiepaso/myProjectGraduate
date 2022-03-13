import { CATEGORY_NAVIGATE_LIST } from '../constant'

const setNavigateList = (category) => ({
  type: CATEGORY_NAVIGATE_LIST,
  payload: category,
})

export { setNavigateList }
