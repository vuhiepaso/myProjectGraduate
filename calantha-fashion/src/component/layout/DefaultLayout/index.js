import React from 'react'
import {StatusBar, Pressable, Keyboard} from 'react-native'

import styles from './styles'

function DefaultLayout({statusBarStyle, children, ...other}) {
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container} {...other}>
      <StatusBar translucent barStyle={statusBarStyle} backgroundColor="transparent" />
      {children}
    </Pressable>
  )
}

export default DefaultLayout
