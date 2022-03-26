import React, {memo, useState} from 'react'
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  Image,
} from 'react-native'

import {sendIcon} from '../../../assets/images'
import styles from '../../../assets/styles/pages/ContactStyles'

function ChatButton({sendMessage, chatRef}) {
  const [message, setMessage] = useState('')

  const handleSended = () => {
    setMessage('')
    chatRef?.current?.clear()
    chatRef?.current?.focus()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}
    >
      <View style={styles.chatView}>
        <TextInput onChangeText={setMessage} ref={chatRef} style={styles.chat} />
        <TouchableOpacity onPress={() => sendMessage(message, handleSended)} style={styles.button}>
          <Image source={{uri: sendIcon}} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default memo(ChatButton)
