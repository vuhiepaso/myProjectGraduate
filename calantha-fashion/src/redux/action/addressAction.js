import { ADDRESS_CLEAR, ADDRESS_UPDATE } from '../constant'

const setUpdateAddress = (address) => ({
  type: ADDRESS_UPDATE,
  payload: address,
})

const setClearAddress = () => ({
  type: ADDRESS_CLEAR,
})

export { setUpdateAddress, setClearAddress }
