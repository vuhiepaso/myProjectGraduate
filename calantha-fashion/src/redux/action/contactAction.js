import { USER_NAVIGATE_CONTACT } from '../constant'

const setNavigateContact = (contact) => ({
  type: USER_NAVIGATE_CONTACT,
  payload: contact,
})

export { setNavigateContact }
