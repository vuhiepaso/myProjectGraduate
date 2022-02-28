import { StyleSheet } from 'react-native'

import {
  buttonHeight,
  greyColor,
  greyTextColor,
  largeRadius,
  primaryTextSize,
  redColor,
  tinyTextSize,
  whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    height: buttonHeight,
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
    borderRadius: largeRadius,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: whiteColor,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: greyTextColor,
  },
  textInput: {
    paddingLeft: 12,
    height: buttonHeight,
    flexGrow: 1,
    fontSize: primaryTextSize,
  },
  helperText: {
    color: redColor,
    fontSize: tinyTextSize,
    marginTop: -8,
    paddingLeft: 12,
    marginBottom: 12,
  },
  imageStyle: {
    backgroundColor: whiteColor,
    paddingRight: 8,
  },
  securityIcon: {
    width: 18,
    height: 18,
    tintColor: greyColor,
  },
})
