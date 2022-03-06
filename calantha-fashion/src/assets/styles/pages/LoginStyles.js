import {StyleSheet} from 'react-native'
import {
  backgroundColor,
  primaryTextColor,
  secondaryTextColor,
  blueTextColor,
  greyTextColor,
  maxWidth,
  titleTextSize,
  primaryTextSize,
  switchColor,
  textBold,
  normalRadius,
} from '../index'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  containerLogin: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: backgroundColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
  },
  content: {
    maxWidth: maxWidth,
    width: '100%',
  },
  loginTitle: {
    color: primaryTextColor,
    fontSize: titleTextSize,
    fontWeight: textBold,
  },
  loginCaption: {
    color: secondaryTextColor,
    fontSize: primaryTextSize,
  },
  inputView: {
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: greyTextColor,
  },
  containerText: {
    width: '100%',
    maxWidth: maxWidth,
    paddingLeft: 12,
  },
  containerRegister: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    color: greyTextColor,
    fontSize: primaryTextSize,
  },
  forgotText: {
    color: blueTextColor,
    fontSize: primaryTextSize,
  },
  registerText: {
    color: blueTextColor,
    fontSize: primaryTextSize,
  },
  switch: {
    backgroundColor: switchColor.backgroundColorBorder,
    padding: 1,
    borderRadius: normalRadius,
  },
  switchView: {
    backgroundColor: switchColor.backgroundColor,
    padding: 1,
    borderRadius: normalRadius,
  },
})
