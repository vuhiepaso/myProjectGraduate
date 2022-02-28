import React from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'

import styles from './styles'

function FormLayout({ children }) {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.flex}
      enabled={Platform.OS === 'ios' ? true : false}
    >
      <View style={styles.container}>
        <View style={styles.content}>{children}</View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default FormLayout
