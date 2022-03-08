import {androidClientId, iosClientId} from './keys'

const googleConfig = {
  androidClientId: androidClientId,
  iosClientId: iosClientId,
  clientId: androidClientId,
  scopes: ['profile', 'email'],
}

export {googleConfig}
