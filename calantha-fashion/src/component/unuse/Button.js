import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {
  buttonHeight,
  buttonTextSize,
  largeRadius,
  maxWidth,
  primaryColor,
  whiteColor,
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
    backgroundColor: primaryColor,
    height: buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: largeRadius,
    marginBottom: 12,
    marginTop: 12,
  },
  buttonText: {
    color: whiteColor,
    fontSize: buttonTextSize,
  },
})
