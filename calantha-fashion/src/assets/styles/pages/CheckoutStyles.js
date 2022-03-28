import {StyleSheet, Dimensions} from 'react-native'
import {
  buttonTextSize,
  errorColor,
  greyColor,
  greyTextColor,
  largeTextSize,
  lightGreyTextColor,
  primaryTextColor,
  textBold,
  textSupperBold,
  tinyRadius,
  whiteColor,
} from '..'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: whiteColor,
    width: '100%',
    borderRadius: 10,
  },
  paymentContainer: {
    flexDirection: 'row',
  },
  productName: {
    width: width / 3,
    color: greyTextColor,
    fontSize: buttonTextSize,
  },
  calculator: {
    width: (width - 132) / 3,
    color: greyTextColor,
    fontSize: buttonTextSize,
  },
  divider: {
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    height: 1,
    backgroundColor: lightGreyTextColor,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    width: (width - 132) / 3,
    color: greyTextColor,
    textAlign: 'right',
    fontSize: buttonTextSize,
  },
  totalText: {
    fontWeight: textSupperBold,
    fontSize: buttonTextSize,
    color: primaryTextColor,
  },
  // address
  contentView: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: whiteColor,
    borderRadius: tinyRadius,
    padding: 16,
    height: 132,
  },
  content: {
    position: 'relative',
    justifyContent: 'center',
    zIndex: 1,
  },
  row: {
    marginTop: 12,
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: greyColor,
  },
  modifyIcon: {
    width: 20,
    height: 20,
    tintColor: whiteColor,
  },
  name: {
    color: primaryTextColor,
    fontSize: largeTextSize,
    fontWeight: textBold,
  },
  text: {
    marginLeft: 12,
    flexGrow: 1,
  },
  locationIcon: {
    width: 20,
    height: 20,
    tintColor: errorColor,
  },
  defaultText: {
    color: errorColor,
    textAlign: 'right',
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  // pay method
  payMethodContainer: {
    marginTop: 16,
  },
  noteContainer: {
    marginLeft: 12,
    marginRight: 12,
  },
})
