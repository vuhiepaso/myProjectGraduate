import React from 'react'
import { View, StatusBar } from 'react-native'

import styles from './styles'

function DefaultLayout({ statusBarStyle, children, ...other }) {
  return (
    <View style={styles.container} {...other}>
      <StatusBar translucent barStyle={statusBarStyle} backgroundColor="transparent" />
      {children}
    </View>
  )
}

export default DefaultLayout
