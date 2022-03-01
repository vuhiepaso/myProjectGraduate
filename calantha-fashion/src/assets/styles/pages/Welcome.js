import {StyleSheet} from 'react-native'
import {
  BackgroundColor,
  BlueTextColor,
  ButtonHeight,
  component,
  LargeRadius,
  MaxWidth,
  PrimaryColor,
  SecondaryTextColor,
  TextBold,
  WhiteColor,
} from '../index'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: BackgroundColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },
  welcomeView: {
    width: '100%',
    padding: 24,
    maxWidth: MaxWidth,
  },
  title: {
    ...component.title,
  },
  caption: {
    ...component.caption,
    marginTop: 8,
    marginBottom: 16,
  },
  googleButton: {
    height: ButtonHeight,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: LargeRadius,
    borderWidth: 1,
    borderColor: PrimaryColor,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginRight: 16,
  },
  createIcon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    marginRight: 16,
    tintColor: WhiteColor,
  },
  googleText: {
    ...component.buttonText,
    color: PrimaryColor,
  },
  createAccountText: {
    ...component.buttonText,
    color: WhiteColor,
  },
  createAccountButton: {
    height: ButtonHeight,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: LargeRadius,
    backgroundColor: PrimaryColor,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
  },
  login: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 4,
  },
  loginText: {
    color: SecondaryTextColor,
  },
  loginButton: {
    paddingLeft: 5,
    color: BlueTextColor,
    fontWeight: TextBold,
  },
})
