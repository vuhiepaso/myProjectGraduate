import {StyleSheet} from 'react-native'
import {buttonHeight, buttonTextSize, largeRadius, maxWidth, primaryTextColor, whiteColor} from '..'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  addButton: {
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: whiteColor,
    borderRadius: largeRadius,
    justifyContent: 'center',
    alignItems: 'center',
    height: buttonHeight,
  },
  buttonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonText: {
    paddingLeft: 8,
    color: primaryTextColor,
    fontSize: buttonTextSize,
  },
  scrollContainer: {
    maxWidth: maxWidth,
    paddingTop: 16,
  },
})
