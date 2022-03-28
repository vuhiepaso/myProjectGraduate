import {StyleSheet} from 'react-native'
import {
  buttonHeight,
  buttonTextSize,
  errorColor,
  primaryTextColor,
  primaryTextSize,
  textSupperBold,
  whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: 301,
  },
  boxContainer: {
    width: 36,
    height: buttonHeight,
    backgroundColor: whiteColor,
    alignItems: 'center',
  },
  box: {
    width: 16,
    lineHeight: buttonHeight,
    fontSize: buttonTextSize,
    fontWeight: textSupperBold,
  },
  caption: {
    marginTop: 8,
    alignSelf: 'center',
    fontSize: primaryTextSize,
    color: primaryTextColor,
  },
  second: {
    color: errorColor,
    fontSize: primaryTextSize,
  },
})
