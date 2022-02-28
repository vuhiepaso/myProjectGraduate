import React, { memo } from 'react'
import { TextInput, View, Text, Image } from 'react-native'

import { isEmpty } from '../../../utils/validate'
import styles from './styles'

function DefaultInput({ placeholder, error, onChange, icon, ...other }) {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <TextInput
          {...other}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(e) => onChange(e)}
        />
      </View>
      {!isEmpty(error) && <Text style={styles.helperText}>{error}</Text>}
    </View>
  )
}

export default memo(DefaultInput)
