import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './styles'

function RadioButton({ label, choose, onChoose, ...other }) {
  const { t } = useTranslation()
  return (
    <TouchableOpacity {...other} onPress={onChoose} style={styles.container}>
      <View style={styles.button}>{choose && <View style={styles.choose} />}</View>
      <Text style={styles.label}>{t(label)}</Text>
    </TouchableOpacity>
  )
}

export default memo(RadioButton)
