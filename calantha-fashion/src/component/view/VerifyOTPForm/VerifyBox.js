import React, { forwardRef } from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'

function VerifyBox({ setCode, ...other }, ref) {
  return (
    <View style={styles.boxContainer}>
      <TextInput
        keyboardType="number-pad"
        {...other}
        onChangeText={setCode}
        ref={ref}
        style={styles.box}
      />
    </View>
  )
}

export default forwardRef(VerifyBox)
