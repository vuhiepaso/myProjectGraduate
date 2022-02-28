import React, { memo, useState } from 'react'
import { TextInput, View, Text, Image, Pressable } from 'react-native'
import { hidePassword, showPassword } from '../../../assets/images'

import { isEmpty } from '../../../utils/validate'
import styles from './styles'

function DefaultInput({ placeholder, error, onChange, icon, ...other }) {
  const [security, setSecurity] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <TextInput
          {...other}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(e) => onChange(e)}
          secureTextEntry={security}
          autoCapitalize="none"
        />
        {security ? (
          <Pressable onPress={() => setSecurity(false)} style={styles.imageStyle}>
            <Image source={{ uri: hidePassword }} style={styles.securityIcon} />
          </Pressable>
        ) : (
          <Pressable onPress={() => setSecurity(true)} style={styles.imageStyle}>
            <Image source={{ uri: showPassword }} style={styles.securityIcon} />
          </Pressable>
        )}
      </View>
      {!isEmpty(error) && <Text style={styles.helperText}>{error}</Text>}
    </View>
  )
}

export default memo(DefaultInput)
