import {StyleSheet, Dimensions} from 'react-native'

import {
  whiteColor,
  primaryColor,
  maxWidth,
  tinyRadius,
  largeRadius,
  buttonHeight,
  buttonTextSize,
  textBold,
} from '..'
const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  // Background
  pagerView: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
  },
  // Adapter
  switchView: {
    position: 'absolute',
    bottom: width * 0.05,
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotView: {
    flexDirection: 'row',
  },
  dot: {
    height: 8,
    margin: 3,
    borderRadius: tinyRadius,
  },
  switchButton: {
    marginTop: 12,
    backgroundColor: primaryColor,
    borderRadius: largeRadius,
    width: width - 48,
    maxWidth: maxWidth,
    height: buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textClick: {
    color: whiteColor,
    fontSize: buttonTextSize,
    fontWeight: textBold,
  },
})
