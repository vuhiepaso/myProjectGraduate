import React from 'react'
import { TouchableOpacity, Image, ActivityIndicator, View } from 'react-native'

import { editIcon, trashIcon } from '../../../assets/images'
import styles from './styles'

function DeleteAndEdit({ onRemoveAddress, onEditAddress, loading }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onEditAddress} style={styles.edit}>
        <Image source={{ uri: editIcon }} style={styles.modifyIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemoveAddress} style={styles.delete}>
        {loading ? (
          <ActivityIndicator color="#FFFFFF" />
        ) : (
          <Image source={{ uri: trashIcon }} style={styles.modifyIcon} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default DeleteAndEdit
