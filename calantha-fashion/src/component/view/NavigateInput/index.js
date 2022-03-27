import React, { memo } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import { navigationIcon } from '../../../assets/images'
import styles from './styles'

function NavigateInput({ icon, name, onClick }) {
  const { t } = useTranslation()
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <View style={styles.buttonData}>
        <Image resizeMode="contain" source={{ uri: icon }} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>{t(name)}</Text>
      </View>
      <Image resizeMode="contain" source={{ uri: navigationIcon }} style={styles.navigateIcon} />
    </TouchableOpacity>
  )
}

export default memo(NavigateInput)
