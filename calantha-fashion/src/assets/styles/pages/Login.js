import {StyleSheet} from 'react-native'
import {
  BackgroundColor,
  PrimaryTextColor,
  SecondaryTextColor,
  BlueTextColor,
  GreyTextColor,
  MaxWidth,
  TitleTextSize,
  PrimaryTextSize,
  SwitchColor,
  TextBold,
  NormalRadius,
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
    backgroundColor: BackgroundColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
  },
  content: {
    maxWidth: MaxWidth,
    width: '100%',
  },
  loginTitle: {
    color: PrimaryTextColor,
    fontSize: TitleTextSize,
    fontWeight: TextBold,
  },
  loginCaption: {
    color: SecondaryTextColor,
    fontSize: PrimaryTextSize,
  },
  inputView: {
    marginTop: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: GreyTextColor,
  },
  containerText: {
    width: '100%',
    maxWidth: MaxWidth,
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
    color: GreyTextColor,
    fontSize: PrimaryTextSize,
  },
  forgotText: {
    color: BlueTextColor,
    fontSize: PrimaryTextSize,
  },
  registerText: {
    color: BlueTextColor,
    fontSize: PrimaryTextSize,
  },
  switch: {
    backgroundColor: SwitchColor.backgroundColorBorder,
    padding: 1,
    borderRadius: NormalRadius,
  },
  switchView: {
    backgroundColor: SwitchColor.backgroundColor,
    padding: 1,
    borderRadius: NormalRadius,
  },
})
