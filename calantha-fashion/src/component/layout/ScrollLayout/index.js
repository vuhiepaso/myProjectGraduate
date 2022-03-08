import React from 'react'
import {ScrollView} from 'react-native'

import styles from './styles'

function ScrollLayout({children}) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  )
}

export default ScrollLayout
