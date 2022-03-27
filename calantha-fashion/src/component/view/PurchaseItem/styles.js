import { StyleSheet } from 'react-native'
import {
  greyTextColor,
  lightGreyTextColor,
  primaryTextColor,
  textSupperBold,
  tinyRadius,
} from '../../../assets/styles'

export default StyleSheet.create({
  container: {
    borderRadius: tinyRadius,
    padding: 16,
    backgroundColor: 'white',
    marginTop: 16,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: textSupperBold,
    marginBottom: 8,
  },
  divider: {
    backgroundColor: lightGreyTextColor,
    width: '100%',
    height: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  image: {
    width: 60,
    height: 72,
    borderRadius: tinyRadius,
  },
  productContainer: {
    marginLeft: 12,
  },
  productName: {
    color: primaryTextColor,
    fontSize: 16,
  },
  productInformation: {
    color: greyTextColor,
    fontSize: 14,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 12,
  },
  leftContainer: {
    width: '50%',
    paddingRight: 4,
  },
  button: {
    borderRadius: tinyRadius,
    borderWidth: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: '50%',
    paddingLeft: 4,
  },
})
