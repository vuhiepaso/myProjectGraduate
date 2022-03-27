import React, {forwardRef, memo} from 'react'
import {useTranslation} from 'react-i18next'
import {View, Image, TextInput, TouchableOpacity} from 'react-native'
import {backNavigationIcon, searchIcon, xIcon} from '../../../assets/images'

import styles from '../../../assets/styles/pages/SearchStyles'

function CustomizeSearchBar(
  {onBack, onClear, searchPlaceHolder, onSearch, onChangeSearch, search},
  ref,
) {
  const {t} = useTranslation()
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchView}>
        <TouchableOpacity onPress={search === '' ? onBack : onClear}>
          <Image
            style={styles.backIcon}
            source={{uri: search === '' ? backNavigationIcon : xIcon}}
          />
        </TouchableOpacity>
        <TextInput
          ref={ref}
          onChangeText={onChangeSearch}
          placeholder={t(searchPlaceHolder)}
          style={styles.textInput}
          value={search}
          autoFocus
        />
        <TouchableOpacity onPress={onSearch}>
          <Image style={styles.searchIcon} source={{uri: searchIcon}} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default memo(forwardRef(CustomizeSearchBar))
