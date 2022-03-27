import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text, ActivityIndicator, Image, TouchableOpacity} from 'react-native'
import {clockIcon, xIcon} from '../../../assets/images'
import {greyColor} from '../../../assets/styles'

import styles from '../../../assets/styles/pages/SearchStyles'

function SearchHistory({
  histories,
  title,
  onRemoveHistory,
  isLoading,
  onChangeSearch,
  historyLoadingId,
}) {
  const {t} = useTranslation()
  return (
    <>
      {histories.length > 0 && (
        <View style={styles.history}>
          <View style={styles.historyView}>
            <Text style={styles.historyTitle}>{t(title)}</Text>
            {histories.map((history, index) => (
              <View key={index} style={styles.historyItem}>
                <View style={styles.leftView}>
                  <Image source={{uri: clockIcon}} style={styles.clockIcon} />
                  <TouchableOpacity onPress={() => onChangeSearch(history.search)}>
                    <Text style={styles.searchText}>{history.search}</Text>
                  </TouchableOpacity>
                </View>
                {historyLoadingId === history.history_id && isLoading ? (
                  <ActivityIndicator color={greyColor} />
                ) : (
                  <TouchableOpacity onPress={() => onRemoveHistory(history.history_id)}>
                    <Image source={{uri: xIcon}} style={styles.xIcon} />
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>
        </View>
      )}
    </>
  )
}

export default memo(SearchHistory)
