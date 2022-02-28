import React from 'react'
import { ImageBackground } from 'react-native'

import styles from './styles'

function BackgroundLayout({ children, background }) {
  return (
    <ImageBackground
      source={{
        uri: background,
      }}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      {children}
    </ImageBackground>
  )
}

export default BackgroundLayout
