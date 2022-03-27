import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text, Pressable, Image} from 'react-native'

import styles from '../../../assets/styles/pages/SearchStyles'

function Suggestion({suggests, title, onNavigateProduct}) {
  const {t} = useTranslation()
  return (
    <>
      {suggests.length > 0 && (
        <View style={styles.suggest}>
          <Text style={styles.suggestTitle}>{t(title)}</Text>
          <View style={styles.suggestView}>
            {suggests.map((suggest, index) => (
              <Pressable
                onPress={() => onNavigateProduct(suggest.product_id, suggest.product_name)}
                key={index}
                style={[styles.suggestItem, {borderLeftWidth: index % 2 === 1 ? 1 : 0}]}
              >
                <Text ellipsizeMode="tail" style={styles.suggestName}>
                  {suggest.product_name}
                </Text>
                <Image source={{uri: suggest.image}} style={styles.suggestImage} />
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </>
  )
}

export default memo(Suggestion)
