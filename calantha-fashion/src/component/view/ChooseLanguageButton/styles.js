import {StyleSheet} from 'react-native'
import {buttonHeight, buttonTextSize, normalRadius, whiteColor} from '../../../assets/styles'

export default StyleSheet.create({
  container: {
    marginTop: 12,
    width: '100%',
    backgroundColor: whiteColor,
    borderRadius: normalRadius,
    height: buttonHeight,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    flexDirection: 'row',
  },
  flag: {
    width: 24,
    height: 24,
    marginLeft: 24,
  },
  text: {
    fontSize: buttonTextSize,
    alignSelf: 'center',
    marginLeft: 12,
  },
  chooseIcon: {
    width: 24,
    height: 24,
    marginRight: 24,
  },
})
