import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'

import {View, Text, TouchableOpacity, Image} from 'react-native'
import {nextArrow} from '../../../assets/images'
import styles from '../../../assets/styles/pages/DashboardStyles'

function DashBoardTitle({onNextPress, title}) {
  const {t} = useTranslation()
  return (
    <View style={styles.titleView}>
      <Text style={styles.title}>{t(title)}</Text>
      <TouchableOpacity onPress={onNextPress}>
        <Image style={styles.nextIcon} resizeMode="stretch" source={{uri: nextArrow}} />
      </TouchableOpacity>
    </View>
  )
}

export default memo(DashBoardTitle)
