import {StyleSheet} from 'react-native'

import {
  blackColor,
  buttonHeight,
  buttonTextSize,
  largeRadius,
  largeTextSize,
  maxWidth,
  normalRadius,
  primaryTextSize,
  textBold,
  warningColor,
} from '../../../assets/styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(148, 148, 148, 0.3)',
  },
  modalView: {
    backgroundColor: 'white',
    width: '50%',
    maxWidth: maxWidth,
    borderRadius: normalRadius,
    padding: 24,
    alignItems: 'center',
    shadowColor: blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 45,
    height: 45,
    tintColor: warningColor,
  },
  button: {
    borderRadius: largeRadius,
    height: buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: warningColor,
  },
  buttonText: {
    color: 'white',
    fontWeight: textBold,
    textAlign: 'center',
    fontSize: buttonTextSize,
  },
  title: {
    marginTop: 16,
    textAlign: 'center',
    fontWeight: textBold,
    fontSize: largeTextSize,
  },
  content: {
    fontSize: primaryTextSize,
    marginTop: 8,
    marginBottom: 24,
  },
})
