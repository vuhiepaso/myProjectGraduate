import {StyleSheet, Dimensions} from 'react-native'
import {greyTextColor, whiteColor, primaryColor} from '../index'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: whiteColor,
    height: 60,
    shadowColor: greyTextColor,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
  },
  customButton: {
    top: -15,
    width: 66,
    height: 66,
    marginRight: width * 0.07,
    marginLeft: width * 0.03,
    borderRadius: 50,
    backgroundColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: greyTextColor,
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
    width: 54,
    height: 54,
    borderRadius: 50,
    backgroundColor: primaryColor,
  },
  tabBarStyle: {
    position: 'absolute',
    top: -6,
    left: 10,
  },
})
