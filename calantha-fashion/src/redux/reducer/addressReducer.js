import { ADDRESS_CLEAR, ADDRESS_UPDATE } from '../constant'

const initialState = {
  address: {
    address_id: '',
    address: '',
    phone: '',
    recipient_name: '',
    is_default: 0,
  },
  isUpdate: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_UPDATE:
      return { ...state, address: action.payload, isUpdate: true }
    case ADDRESS_CLEAR:
      return { ...initialState }
    default:
      return state
  }
}
