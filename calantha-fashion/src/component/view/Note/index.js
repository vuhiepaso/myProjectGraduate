import React, { memo } from 'react'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './styles'

function Note({ note }) {
  const { t } = useTranslation()
  return <Text style={styles.text}>{t(note)}</Text>
}

export default memo(Note)
