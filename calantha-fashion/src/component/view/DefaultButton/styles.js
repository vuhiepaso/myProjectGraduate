import {StyleSheet} from 'react-native'

import {
  buttonHeight,
  buttonTextSize,
  largeRadius,
  maxWidth,
  primaryColor,
  whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    height: buttonHeight,
    width: '100%',
    maxWidth: maxWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: largeRadius,
    marginBottom: 12,
    marginTop: 12,
  },
  buttonText: {
    color: whiteColor,
    fontSize: buttonTextSize,
  },
})
