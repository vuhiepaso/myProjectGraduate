import { StyleSheet, Dimensions } from 'react-native'
import {
  greyTextColor,
  lightGreyTextColor,
  primaryColor,
  redColor,
  textBold,
  tinyRadius,
  whiteColor,
} from '../../../assets/styles'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  itemView: {
    backgroundColor: whiteColor,
    borderRadius: 5,
    marginBottom: 24,
    width: (width - 72) / 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discount: {
    width: 55,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: redColor,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  discountText: {
    color: whiteColor,
    fontWeight: '500',
  },
  icon: {
    width: 20,
    height: 20,
  },

  favorite: {
    tintColor: redColor,
  },
  normal: {
    tintColor: greyTextColor,
  },
  iconView: {
    paddingTop: width * 0.02,
    paddingRight: width * 0.03,
    paddingBottom: width * 0.03,
  },
  content: {
    flexDirection: 'column',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: (width - 48) * 0.25,
    height: (width - 48) * 0.35,
  },
  descriptionView: {
    alignItems: 'center',
  },
  price: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 4,
    paddingRight: 4,
  },
  discountPrice: {
    color: primaryColor,
  },
  divideView: {
    width: width * 0.03,
  },
  rootPrice: {
    color: greyTextColor,
    textDecorationLine: 'line-through',
  },
  name: {
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 8,
    marginBottom: 8,
  },
  divide: {
    width: '100%',
    height: 1,
    backgroundColor: lightGreyTextColor,
    marginTop: 0.01 * width,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pay: {
    paddingTop: 0.03 * width,
    paddingBottom: 0.03 * width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: tinyRadius,
    borderBottomRightRadius: tinyRadius,
    backgroundColor: primaryColor,
  },
  payText: {
    marginLeft: 5,
    color: whiteColor,
    fontWeight: textBold,
  },
  addIcon: {
    tintColor: whiteColor,
  },
})
