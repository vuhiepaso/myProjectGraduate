import { StyleSheet } from 'react-native'
import {
  backgroundColor,
  blueTextColor,
  buttonHeight,
  buttonTextSize,
  greyTextColor,
  largeRadius,
  maxWidth,
  normalRadius,
  primaryColor,
  primaryTextColor,
  primaryTextSize,
  textBold,
  titleTextSize,
  whiteColor,
} from '../index'

export default StyleSheet.create({
  containerText: {
    maxWidth: '100%',
    marginBottom: 20,
    paddingLeft: 12,
  },
  createTextBig: {
    color: primaryTextColor,
    fontSize: titleTextSize,
    alignItems: 'flex-end',
    fontWeight: textBold,
  },
  createText: {
    color: greyTextColor,
    fontSize: primaryTextSize,
  },
  loginView: {
    width: '100%',
    alignItems: 'flex-end',
    marginRight: 24,
  },
  button: {
    backgroundColor: primaryColor,
    height: buttonHeight,
    width: '100%',
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
  divider: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  text: {
    color: greyTextColor,
    fontSize: primaryTextSize,
  },
  textLogin: {
    color: blueTextColor,
    fontSize: primaryTextSize,
    fontWeight: textBold,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: greyTextColor,
  },
})
