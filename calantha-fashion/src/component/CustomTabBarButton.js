import React from 'react'
import {View, Pressable} from 'react-native'
import styles from '../assets/styles/navigation/DashboardTab'

const CustomTabBarButton = ({onPress, children}) => {
  return (
    <Pressable onPress={onPress} style={styles.customButton}>
      <View style={styles.customView}>{children}</View>
    </Pressable>
  )
}

export default CustomTabBarButton
