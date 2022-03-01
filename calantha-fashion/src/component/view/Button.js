import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {
  ButtonHeight,
  ButtonTextSize,
  LargeRadius,
  MaxWidth,
  PrimaryColor,
  WhiteColor,
} from '../../assets/styles/index'

export default function button(props) {
  const {texts} = props
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{texts}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: PrimaryColor,
    height: ButtonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: LargeRadius,
    marginBottom: 12,
    marginTop: 12,
  },
  buttonText: {
    color: WhiteColor,
    fontSize: ButtonTextSize,
  },
})
