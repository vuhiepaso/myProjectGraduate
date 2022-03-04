import React from 'react'
import {TextInput, View, StyleSheet, Text} from 'react-native'
import {isEmpty} from '../../utils/validate'

import {
  buttonHeight,
  largeRadius,
  primaryTextSize,
  redColor,
  tinyTextSize,
  whiteColor,
} from '../../assets/styles'

export default function Input(props) {
  const {placeholder, helperText, setValue, resetForm, icon} = props
  const changeText = (e) => {
    resetForm()
    setValue(e)
  }
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {icon}
        <TextInput
          {...props}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(e) => changeText(e)}
        />
      </View>
      {!isEmpty(helperText) && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    height: buttonHeight,
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
    borderRadius: largeRadius,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: whiteColor,
  },
  textInput: {
    paddingLeft: 12,
    height: buttonHeight,
    flexGrow: 1,
    fontSize: primaryTextSize,
  },
  helperText: {
    color: redColor,
    fontSize: tinyTextSize,
    marginTop: -8,
    paddingLeft: 12,
    marginBottom: 12,
  },
})
