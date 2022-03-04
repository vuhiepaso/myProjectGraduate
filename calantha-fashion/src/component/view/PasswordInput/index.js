import React, {memo, useState} from 'react'
import {TextInput, View, Text, Image, Pressable} from 'react-native'

import { disableTextColor } from '../../../assets/styles'
import {Ionicons} from '@expo/vector-icons'
import {isEmpty} from '../../../utils/validate'
import styles from './styles'
import {lockIcon} from '../../../assets/images'

function DefaultInput(props) {
  const [security, setSecurity] = useState(true)
  const {placeholder, helperText, setValue, resetForm} = props
  const changeText = (e) => {
    resetForm()
    setValue(e)
  }
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={{uri: lockIcon}} style={styles.icon} />
        <TextInput
          {...props}
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(e) => changeText(e)}
          secureTextEntry={security}
        />
        {security ? (
          <Pressable onPress={() => setSecurity(false)} style={styles.imageStyle}>
            <Ionicons name="eye" size={20} color={disableTextColor} />
          </Pressable>
        ) : (
          <Pressable onPress={() => setSecurity(true)} style={styles.imageStyle}>
            <Ionicons name="eye-off" size={20} color={disableTextColor} />
          </Pressable>
        )}
      </View>
      {!isEmpty(helperText) && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  )
}

export default memo(DefaultInput)
