import {Dimensions, StyleSheet} from 'react-native'
import {
  backgroundColor,
  buttonHeight,
  greyTextColor,
  largeRadius,
  largeTextSize,
  primaryTextColor,
  primaryTextSize,
  textBold,
  tinyRadius,
  whiteColor,
} from '..'
const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
    paddingLeft: 24,
    paddingRight: 24,
  },
  flex: {
    flex: 1,
    width: '100%',
  },
  informationView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: largeRadius,
    zIndex: 1,
  },
  information: {
    backgroundColor: whiteColor,
    borderRadius: tinyRadius,
    width: '100%',
    marginTop: -50,
    paddingTop: 70,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: greyTextColor,
  },
  informationText: {
    marginLeft: 8,
    fontSize: primaryTextSize,
    color: greyTextColor,
  },
  purchaseView: {
    backgroundColor: whiteColor,
    borderRadius: tinyRadius,
    padding: 20,
    marginTop: 24,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: textBold,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    color: primaryTextColor,
    fontSize: primaryTextSize,
  },
  historyIcon: {
    width: 10,
    height: 10,
    marginLeft: 5,
    tintColor: primaryTextColor,
  },
  titleText: {
    color: primaryTextColor,
    fontSize: largeTextSize,
    fontWeight: textBold,
  },
  purchase: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  purchaseContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  purchaseIcon: {
    width: 0.1 * width,
    height: 0.1 * width,
    maxWidth: 0.1 * height,
    maxHeight: 0.1 * height,
    tintColor: greyTextColor,
  },
  purchaseText: {
    fontSize: primaryTextSize,
    color: greyTextColor,
  },
  buttonView: {
    marginTop: 24,
    marginBottom: 80,
  },
  buttonData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: buttonHeight,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    backgroundColor: whiteColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: tinyRadius,
    flexDirection: 'row',
    marginBottom: 12,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    tintColor: primaryTextColor,
  },
  buttonText: {
    paddingLeft: 8,
    fontSize: primaryTextSize,
    color: primaryTextColor,
  },
})
