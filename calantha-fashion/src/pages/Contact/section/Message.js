import React, {memo, useEffect} from 'react'
import {View, Text, ScrollView, Image, Keyboard} from 'react-native'

import {anonymousAvatar} from '../../../assets/images'
import {
  lightGreyTextColor,
  primaryColor,
  primaryTextColor,
  whiteColor,
} from '../../../assets/styles'
import styles from '../../../assets/styles/pages/ContactStyles'

function Message({scrollRef, listMessages, avatar}) {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      scrollRef?.current?.scrollToEnd(),
    )
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      scrollRef?.current?.scrollToEnd(),
    )
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <ScrollView
      style={styles.messageContainer}
      ref={scrollRef}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.messageView}>
        {listMessages.length > 0 &&
          listMessages.map((m, index) => (
            <View
              key={index}
              style={[
                styles.message,
                {
                  flexDirection: m.role === 'user' ? 'row' : 'row-reverse',
                  alignSelf: m.role === 'user' ? 'flex-start' : 'flex-end',
                },
              ]}
            >
              <Image
                source={{
                  uri: m.role === 'user' ? anonymousAvatar : avatar || anonymousAvatar,
                }}
                style={styles.messageImage}
              />
              <View
                style={[
                  styles.messageArea,
                  {
                    backgroundColor: m.role === 'user' ? lightGreyTextColor : primaryColor,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    {
                      color: m.role === 'user' ? primaryTextColor : whiteColor,
                    },
                  ]}
                >
                  {m.message}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </ScrollView>
  )
}

export default memo(Message)
