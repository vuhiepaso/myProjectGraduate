import React from 'react'
import {TextInput, View, StyleSheet, Text} from 'react-native'
import {isEmpty} from '../../../utils/validate' 
import styles from './styles'

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

