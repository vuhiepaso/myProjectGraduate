import {StyleSheet} from 'react-native'

import {
  buttonHeight,
  greyTextColor,
  largeRadius,
  maxWidth,
  primaryTextSize,
  redColor,
  tinyTextSize,
  whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
    maxWidth: maxWidth,
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    height: buttonHeight,
    width: '100%',
    alignItems: 'center',
    borderRadius: largeRadius,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: whiteColor,
  },
  icon: {
    marginRight: 16,
    width: 20,
    height: 20,
    tintColor: greyTextColor,
  },
  textInput: {
    height: buttonHeight - 16,
    flexGrow: 1,
    fontSize: primaryTextSize,
  },
  helperText: {
    color: redColor,
    fontSize: tinyTextSize,
    marginTop: 4,
    paddingLeft: 12,
  },
})
