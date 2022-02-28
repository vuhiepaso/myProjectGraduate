import React, { memo } from 'react'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './styles'

function Title({ title, caption }) {
  const { t } = useTranslation()
  return (
    <>
      <Text style={styles.title}>{t(title)}</Text>
      <Text style={styles.caption}>{t(caption)}</Text>
    </>
  )
}

export default memo(Title)
