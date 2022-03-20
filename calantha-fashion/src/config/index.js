import {androidClientId, iosClientId} from './keys'

const googleConfig = {
  androidClientId: androidClientId,
  iosClientId: iosClientId,
  clientId: androidClientId,
  scopes: ['profile', 'email'],
}

const convertMoney = (money) => {
  if (money < 1000) {
    return money
  } else {
    return Math.floor(money / 1000)
      .toFixed(3)
      .replace(/\d(?=(\d{3})+\.)/g, '$&.')
  }
}

export {googleConfig, convertMoney}
