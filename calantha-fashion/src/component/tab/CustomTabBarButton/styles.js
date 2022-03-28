import {StyleSheet, Dimensions} from 'react-native'
import {whiteColor, primaryColor, largeRadius, greyColor} from '../../../assets/styles'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  customButton: {
    top: -16,
    width: 64,
    height: 64,
    marginRight: width * 0.07,
    marginLeft: width * 0.03,
    borderRadius: largeRadius,
    backgroundColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: greyColor,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
  customView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: largeRadius,
    backgroundColor: primaryColor,
  },
})
