import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'

export default function LoadingIndicator() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000000" />
    </View>
  )
}
