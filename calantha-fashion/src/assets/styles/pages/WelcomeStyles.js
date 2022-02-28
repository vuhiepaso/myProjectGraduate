import { StyleSheet } from 'react-native'
import {
  backgroundColor,
  blueTextColor,
  buttonHeight,
  largeRadius,
  maxWidth,
  primaryColor,
  secondaryTextColor,
  textBold,
  whiteColor,
  normalRadius,
  titleTextSize,
  primaryTextColor,
  primaryTextSize,
  buttonTextSize,
} from '..'

export default StyleSheet.create({
  // Google Button
  googleButton: {
    height: buttonHeight,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: largeRadius,
    borderWidth: 1,
    borderColor: primaryColor,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginRight: 16,
  },
  googleText: {
    fontSize: buttonTextSize,
    fontWeight: textBold,
    color: primaryColor,
  },
  // Create Button
  createAccountButton: {
    height: buttonHeight,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: largeRadius,
    backgroundColor: primaryColor,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  createIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginRight: 16,
    tintColor: whiteColor,
  },
  createAccountText: {
    fontSize: buttonTextSize,
    fontWeight: textBold,
    color: whiteColor,
  },
})
