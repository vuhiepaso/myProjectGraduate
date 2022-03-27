import { StyleSheet } from 'react-native'
import { greyTextColor, primaryTextSize } from '../../../assets/styles'

export default StyleSheet.create({
  switchView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    marginLeft: 5,
    color: greyTextColor,
    fontSize: primaryTextSize,
  },
})
