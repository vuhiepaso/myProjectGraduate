import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Pressable, Image, Text } from 'react-native'
import { filterIcon, searchIcon } from '../../../assets/images'

import styles from './styles'

function SearchBar({ onSearch, onFilter, placeholder }) {
  const { t } = useTranslation()
  return (
    <View style={styles.searchView}>
      <Pressable onPress={onSearch}>
        <Image style={styles.searchIcon} source={{ uri: searchIcon }} />
      </Pressable>
      <Pressable style={styles.textInput} onPress={onSearch}>
        <Text>{t(placeholder)}</Text>
      </Pressable>
      <Pressable onPress={onFilter}>
        <Image style={styles.filterIcon} source={{ uri: filterIcon }} />
      </Pressable>
    </View>
  )
}

export default memo(SearchBar)
