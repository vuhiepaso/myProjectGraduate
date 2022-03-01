import React, {useState} from 'react'
import {TextInput, View, StyleSheet, Text, Pressable, Image} from 'react-native'
import {isEmpty} from '../../utils/validate'
import {Ionicons} from '@expo/vector-icons'
import {
  ButtonHeight,
  DisableTextColor,
  GreyTextColor,
  LargeRadius,
  PrimaryTextSize,
  RedColor,
  TinyTextSize,
  WhiteColor,
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
          <Pressable
            onPress={() => setSecurity(false)}
            style={styles.imageStyle}
          >
            <Ionicons name="eye" size={20} color={DisableTextColor} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setSecurity(true)}
            style={styles.imageStyle}
          >
            <Ionicons name="eye-off" size={20} color={DisableTextColor} />
          </Pressable>
        )}
      </View>
      {!isEmpty(helperText) && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
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
    height: ButtonHeight,
    width: '100%',
    marginBottom: 12,
    alignItems: 'center',
    borderRadius: LargeRadius,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: WhiteColor,
  },
  textInput: {
    paddingLeft: 12,
    height: ButtonHeight,
    flexGrow: 1,
    fontSize: PrimaryTextSize,
  },
  helperText: {
    color: RedColor,
    fontSize: TinyTextSize,
    marginBottom: 12,
    marginTop: -8,
    paddingLeft: 12,
  },
  imageStyle: {
    backgroundColor: WhiteColor,
    paddingRight: 8,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: GreyTextColor,
  },
})
