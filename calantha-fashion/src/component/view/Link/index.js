import React, { memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './styles'

function Link({ caption, buttonName, action }) {
  const { t } = useTranslation()

  return (
    <View style={styles.login}>
      <Text style={styles.loginText}>{t(caption)}</Text>
      <TouchableOpacity onPress={action}>
        <Text style={styles.loginButton}>{t(buttonName)}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default memo(Link)
