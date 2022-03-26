import {Dimensions, StyleSheet} from 'react-native'
import {
  backgroundColor,
  buttonHeight,
  largeRadius,
  normalRadius,
  primaryColor,
  tinyRadius,
  whiteColor,
} from '../index'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  messageContainer: {
    paddingTop: 16,
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: whiteColor,
  },
  messageView: {
    paddingBottom: 24,
  },
  message: {
    marginBottom: 8,
  },
  messageImage: {
    width: 30,
    height: 30,
    borderRadius: largeRadius,
  },
  messageArea: {
    minHeight: 30,
    marginLeft: 16,
    paddingLeft: 16,
    marginRight: 16,
    paddingRight: 16,
    maxWidth: 0.5 * width,
    borderRadius: normalRadius,
  },
  messageText: {
    lineHeight: 30,
  },
  flex: {
    width: '100%',
    backgroundColor: whiteColor,
  },

  chatView: {
    marginTop: 12,
    height: buttonHeight,
    width: '100%',
    marginBottom: 12,
    flexDirection: 'row',
  },
  chat: {
    flexGrow: 1,
    height: 45,
    marginLeft: 16,
    paddingLeft: 20,
    marginRight: 16,
    borderRadius: largeRadius,
    backgroundColor: backgroundColor,
  },
  sendIcon: {
    width: 28,
    height: 28,
    tintColor: primaryColor,
  },
  button: {
    marginRight: 12,
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: buttonHeight,
    borderRadius: tinyRadius,
  },
  buttonText: {
    color: whiteColor,
  },
})
