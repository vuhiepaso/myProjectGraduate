import React from 'react'
import { Image } from 'react-native'
import { greyColor, primaryColor } from '../../../assets/styles'

function TabBarIcon({ icon, focused }) {
  return (
    <Image
      source={{
        uri: icon,
      }}
      resizeMode="contain"
      // @ts-ignore
      width={28}
      height={28}
      style={{
        width: focused ? 28 : 24,
        height: focused ? 28 : 24,
        tintColor: focused ? primaryColor : greyColor,
      }}
    />
  )
}

export default TabBarIcon
