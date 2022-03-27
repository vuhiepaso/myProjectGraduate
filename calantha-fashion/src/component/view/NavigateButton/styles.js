import {StyleSheet} from 'react-native'
import {
  buttonHeight,
  primaryTextColor,
  primaryTextSize,
  tinyRadius,
  whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  buttonData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: buttonHeight,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: tinyRadius,
    flexDirection: 'row',
    marginBottom: 12,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: primaryTextColor,
  },
  buttonText: {
    paddingLeft: 8,
    fontSize: primaryTextSize,
    color: primaryTextColor,
  },
})
