import { StyleSheet, Dimensions } from 'react-native'
import {
  errorColor,
  greyColor,
  largeTextSize,
  primaryColor,
  primaryTextColor,
  textBold,
  tinyRadius,
  whiteColor,
} from '../../../assets/styles'
const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  contentView: {
    width: width,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 48,
    backgroundColor: whiteColor,
    borderRadius: tinyRadius,
    padding: 20,
    marginRight: 24,
    marginLeft: 24,
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
    flexBasis: width - 180,
  },
  locationIcon: {
    width: 20,
    height: 20,
    tintColor: errorColor,
  },
  defaultText: {
    color: errorColor,
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  // delete and edit
  container: {
    flexDirection: 'row',
  },
  edit: {
    width: 60,
    alignItems: 'center',
    marginRight: 12,
    marginLeft: -12,
    borderRadius: tinyRadius,
    height: 132,
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  delete: {
    width: 60,
    marginRight: 24,
    alignItems: 'center',
    borderRadius: tinyRadius,
    height: 132,
    justifyContent: 'center',
    backgroundColor: errorColor,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
})
