import {Dimensions, StyleSheet} from 'react-native'
import {
  backgroundColor,
  blueTextColor,
  buttonHeight,
  component,
  largeRadius,
  normalRadius,
  tinyRadius,
  whiteColor,
} from '../index'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    ...component.flex,
    alignItems: 'center',
    backgroundColor: whiteColor,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  message: {
    marginTop: 8,
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
  messageView: {
    marginTop: 12,
    flex: 1,
    height: '80%',
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  chatView: {
    marginTop: 10,
    height: buttonHeight,
    width: '100%',
    marginBottom: 90,
    flexDirection: 'row',
  },
  chat: {
    flexGrow: 1,
    height: buttonHeight,
    marginLeft: 15,
    paddingLeft: 20,
    marginRight: 15,
    borderRadius: largeRadius,
    backgroundColor: backgroundColor,
  },
  button: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: blueTextColor,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: buttonHeight,
    borderRadius: tinyRadius,
  },
  buttonText: {
    color: whiteColor,
  },
})
