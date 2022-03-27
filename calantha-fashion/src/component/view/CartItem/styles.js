import { StyleSheet, Dimensions } from 'react-native'
import {
  buttonTextSize,
  errorColor,
  greyColor,
  greyTextColor,
  lightGreyTextColor,
  primaryColor,
  primaryTextColor,
  primaryTextSize,
  textBold,
  tinyRadius,
  whiteColor,
} from '../../../assets/styles'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  cartView: {
    width: width - 48,
    borderRadius: 20,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentView: {
    width: width,
    marginTop: 16,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: whiteColor,
    marginLeft: 24,
    marginRight: 24,
    paddingLeft: 20,
    borderRadius: tinyRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 78,
  },
  leftContent: {
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 50,
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
  },
  data: {
    marginLeft: 20,
  },
  rightContent: {
    width: 50,
    borderTopRightRadius: tinyRadius,
    borderBottomRightRadius: tinyRadius,
    alignItems: 'center',
  },
  buttonQuantity: {
    height: 38,
    flex: 1,
    width: 50,
    borderLeftWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: lightGreyTextColor,
  },
  quantity: {
    height: 38,
    flex: 1,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderLeftColor: lightGreyTextColor,
    borderBottomColor: lightGreyTextColor,
    borderTopColor: lightGreyTextColor,
  },
  quantityText: {
    color: greyColor,
    fontSize: buttonTextSize,
  },
  modifyIcon: {
    width: 12,
    height: 12,
    tintColor: primaryColor,
  },
  name: {
    marginTop: 2,
    color: primaryTextColor,
    fontWeight: textBold,
  },
  price: {
    color: greyTextColor,
    fontSize: primaryTextSize,
    fontWeight: textBold,
  },
  remain: {
    marginTop: 2,
    color: greyTextColor,
    fontWeight: textBold,
  },
  total: {
    marginTop: 2,
    color: primaryColor,
    fontWeight: textBold,
  },
  modifyQuantity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // delete
  container: {
    flexDirection: 'row',
  },
  delete: {
    width: 60,
    marginRight: 24,
    alignItems: 'center',
    borderRadius: tinyRadius,
    height: 124,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: errorColor,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: whiteColor,
  },
})
