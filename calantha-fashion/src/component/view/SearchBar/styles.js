import { StyleSheet } from 'react-native'
import { buttonHeight, largeRadius, primaryColor, whiteColor } from '../../../assets/styles'

export default StyleSheet.create({
  searchView: {
    width: '100%',
    backgroundColor: whiteColor,
    height: buttonHeight,
    borderRadius: largeRadius,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 28,
    marginBottom: 24,
  },
  textInput: {
    flexGrow: 1,
    paddingLeft: 12,
    alignSelf: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  filterIcon: {
    width: 24,
    height: 24,
    tintColor: primaryColor,
  },
})
