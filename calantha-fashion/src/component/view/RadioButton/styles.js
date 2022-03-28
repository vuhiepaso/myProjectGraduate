import { StyleSheet } from 'react-native'
import {
  normalRadius,
  primaryColor,
  primaryTextColor,
  primaryTextSize,
  textBold,
  textSupperBold,
  tinyRadius,
  whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  button: {
    marginTop: 2,
    backgroundColor: whiteColor,
    borderColor: primaryColor,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalRadius,
    borderWidth: 1,
  },
  choose: {
    width: 10,
    height: 10,
    borderRadius: tinyRadius,
    backgroundColor: primaryColor,
  },
  label: {
    color: primaryTextColor,
    fontSize: primaryTextSize,
    fontWeight: textSupperBold,
    marginLeft: 8,
  },
})
