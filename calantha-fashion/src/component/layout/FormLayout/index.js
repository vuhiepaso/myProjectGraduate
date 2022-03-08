import React, {useEffect, useRef, useState} from 'react'
import {View, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Keyboard} from 'react-native'
import styles from './styles'

const {height} = Dimensions.get('screen')

function FormLayout({children}) {
  const ref = useRef(null)
  const [keyboardStatus, setKeyboardStatus] = useState(undefined)

  const maxHeight =
    Dimensions.get('screen').height - ref?.current?._keyboardEvent?.endCoordinates.height - 100

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', () => {
      setKeyboardStatus('shown')
    })
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardStatus('hidden')
    })
    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.flex}
      enabled={Platform.OS === 'ios' ? true : false}
      ref={ref}
    >
      <ScrollView
        style={[
          styles.container,
          {
            maxHeight: keyboardStatus === 'shown' ? maxHeight : height,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.content]}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default FormLayout
