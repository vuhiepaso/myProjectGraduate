import {Dimensions, StyleSheet} from 'react-native'
import {blackColor, buttonHeight, largeRadius, whiteColor} from '..'
const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    paddingLeft: 12,
    paddingTop: 16,
    height: buttonHeight + 16,
    justifyContent: 'center',
    backgroundColor: blackColor,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: whiteColor,
  },
  footer: {
    width: '100%',
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: blackColor,
  },
  flashIcon: {
    width: 28,
    height: 28,
    tintColor: whiteColor,
  },
  switchIcon: {
    width: 36,
    height: 36,
    tintColor: whiteColor,
  },
  captureBorder: {
    borderRadius: largeRadius,
    width: buttonHeight,
    height: buttonHeight,
    borderWidth: 4,
    borderColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    width: 32,
    height: 32,
    backgroundColor: whiteColor,
    borderRadius: largeRadius,
  },
})
