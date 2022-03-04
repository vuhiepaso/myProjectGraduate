import React, {useState} from 'react'
import {TextInput, View, StyleSheet, Text, Pressable, Image} from 'react-native'
import {isEmpty} from '../../utils/validate'
import {Ionicons} from '@expo/vector-icons'
import {
  buttonHeight,
  disableTextColor,
  greyTextColor,
  largeRadius,
  primaryTextSize,
  redColor,
  tinyTextSize,
  whiteColor,
} from '../../assets/styles'
import {lockIcon} from '../../assets/images'

export default function Input(props) {
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    height: buttonHeight,
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
    borderRadius: largeRadius,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: whiteColor,
  },
  textInput: {
    paddingLeft: 12,
    height: buttonHeight,
    flexGrow: 1,
    fontSize: primaryTextSize,
  },
  helperText: {
    color: redColor,
    fontSize: tinyTextSize,
    marginBottom: 12,
    marginTop: -8,
    paddingLeft: 12,
  },
  imageStyle: {
    backgroundColor: whiteColor,
    paddingRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: greyTextColor,
  },
})
