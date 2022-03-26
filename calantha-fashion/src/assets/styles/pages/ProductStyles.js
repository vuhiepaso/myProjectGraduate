import {StyleSheet, Dimensions} from 'react-native'
import {
  backgroundColor,
  buttonHeight,
  buttonTextSize,
  greyTextColor,
  largeRadius,
  largeTextSize,
  maxWidth,
  normalRadius,
  primaryColor,
  primaryTextColor,
  primaryTextSize,
  textBold,
  titleTextSize,
  whiteColor,
} from '../index'

const {width, height} = Dimensions.get('screen')

export default StyleSheet.create({
  // image
  imageView: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  image: {
    borderRadius: 10,
    width: width * 0.378,
    height: width * 0.6,
    maxWidth: height * 0.252,
    maxHeight: height * 0.4,
  },
  // product form
  dataView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  contentView: {
    width: '100%',
    backgroundColor: whiteColor,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
    alignItems: 'center',
    borderTopLeftRadius: normalRadius,
    borderTopRightRadius: normalRadius,
  },
  // product content
  content: {
    maxWidth: maxWidth,
    width: '100%',
  },
  title: {
    fontSize: titleTextSize,
    fontWeight: textBold,
    color: primaryTextColor,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rootPrice: {
    color: greyTextColor,
    fontSize: largeTextSize,
    textDecorationLine: 'line-through',
  },
  discountPrice: {
    color: primaryColor,
    fontSize: largeTextSize,
    fontWeight: textBold,
  },
  remain: {
    fontSize: primaryTextSize,
    color: greyTextColor,
    marginTop: 4,
  },
  description: {
    fontSize: primaryTextSize,
    color: greyTextColor,
  },
  productContainer: {
    flexDirection: 'row',
    marginTop: 8,
    justifyContent: 'space-between',
  },
  product: {
    flexDirection: 'row',
  },
  selectedColor: {
    borderWidth: 1,
    width: 24,
    height: 24,
    marginRight: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
  },
  sizeButton: {
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    borderWidth: 1,
    lineHeight: 24,
    width: 24,
    height: 24,
    textAlign: 'center',
  },
  // product action
  button: {
    maxWidth: maxWidth,
    width: '100%',
  },
  buttonQuantity: {
    marginTop: 4,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    borderRadius: largeRadius,
  },
  changeQuantity: {
    backgroundColor: primaryColor,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: largeRadius,
  },
  quantity: {
    width: 60,
    textAlign: 'center',
    height: 30,
    lineHeight: 30,
    fontSize: buttonTextSize,
    color: primaryTextColor,
  },
  icon: {
    tintColor: whiteColor,
    width: 14,
    height: 14,
  },
  quantityText: {
    fontSize: largeTextSize,
    color: primaryTextColor,
  },
  buttonAddToCart: {
    marginTop: 16,
    height: buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: largeRadius,
    backgroundColor: primaryColor,
  },
  addToCartText: {
    fontSize: buttonTextSize,
    fontWeight: textBold,
    color: whiteColor,
  },
  more: {
    fontSize: primaryTextSize,
    color: primaryTextColor,
    fontWeight: textBold,
  },
})
