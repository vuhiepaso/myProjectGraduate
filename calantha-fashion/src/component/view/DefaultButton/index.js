import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {Text, TouchableOpacity} from 'react-native'

import styles from './styles'

function DefaultButton({buttonName, onClick, ...other}) {
  const {t} = useTranslation()
  return (
    <TouchableOpacity style={styles.button} onPress={onClick} {...other}>
      <Text style={styles.buttonText}>{t(buttonName)}</Text>
    </TouchableOpacity>
  )
}

export default memo(DefaultButton)
