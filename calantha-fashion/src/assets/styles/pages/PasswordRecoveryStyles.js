import {StyleSheet} from 'react-native'
import {
    maxWidth,
    primaryTextSize,
    textBold,
    titleTextSize,
    whiteColor,
    greyTextColor,
  } from '../index'

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    flex: {
      flex: 1,
    },
    content: {
      flex: 1,
      minHeight: 350,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50,
      maxWidth: maxWidth,
    },
    title: {
      fontSize: titleTextSize,
      color: whiteColor,
      fontWeight: textBold,
    },
    instruct: {
      fontSize: primaryTextSize,
      color: whiteColor,
      textAlign: 'center',
      marginBottom: 20,
    },
    icon: {
      width: 20,
      height: 20,
      tintColor: greyTextColor,
    },
  })