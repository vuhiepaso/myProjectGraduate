import { StyleSheet } from 'react-native'
import {
  secondaryTextColor,
  textBold,
  titleTextSize,
  primaryTextColor,
  primaryTextSize,
} from '../../../assets/styles'

export default StyleSheet.create({
  title: {
    fontSize: titleTextSize,
    fontWeight: textBold,
    color: primaryTextColor,
  },
  caption: {
    fontSize: primaryTextSize,
    color: secondaryTextColor,
    marginTop: 8,
    marginBottom: 16,
  },
})
