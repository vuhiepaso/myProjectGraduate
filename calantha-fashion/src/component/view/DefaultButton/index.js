import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

function DefaultButton({ buttonName, action, ...other }) {
  const { t } = useTranslation()
  return (
    <TouchableOpacity style={styles.button} onPress={action} {...other}>
      <Text style={styles.buttonText}>{t(buttonName)}</Text>
    </TouchableOpacity>
  )
}

export default memo(DefaultButton)
