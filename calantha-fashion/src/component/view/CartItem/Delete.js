import React from 'react'
import { TouchableOpacity, Image, ActivityIndicator, View } from 'react-native'

import { trashIcon } from '../../../assets/images'
import styles from './styles'

function Delete({ onRemoveCart, loading }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onRemoveCart} style={styles.delete}>
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Image source={{ uri: trashIcon }} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Delete
