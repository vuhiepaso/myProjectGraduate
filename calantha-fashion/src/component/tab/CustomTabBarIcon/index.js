import React from 'react'
import {Image} from 'react-native'
import styles from './styles'

function CustomTabBarIcon({icon}) {
  return (
    <Image
      source={{
        uri: icon,
      }}
      // @ts-ignore
      width={28}
      height={28}
      resizeMode="contain"
      style={styles.icon}
    />
  )
}

export default CustomTabBarIcon
