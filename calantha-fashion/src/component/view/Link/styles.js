import { StyleSheet } from 'react-native'
import { blueTextColor, secondaryTextColor, textBold } from '../../../assets/styles'

export default StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 4,
  },
  loginText: {
    color: secondaryTextColor,
  },
  loginButton: {
    paddingLeft: 5,
    color: blueTextColor,
    fontWeight: textBold,
  },
})
