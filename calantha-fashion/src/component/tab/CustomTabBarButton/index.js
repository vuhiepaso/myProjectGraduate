import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import styles from './styles'

function CustomTabBarButton({ onPress, children }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customButton}>
      <View style={styles.customView}>{children}</View>
    </TouchableOpacity>
  )
}

export default CustomTabBarButton
