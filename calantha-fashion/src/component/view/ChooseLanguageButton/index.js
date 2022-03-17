import React, {memo} from 'react'
import {Image, View, Text, TouchableOpacity} from 'react-native'
import {useTranslation} from 'react-i18next'
import styles from './styles'

function ChooseLanguageButton({language, flag, name, uri, languageName, onChoose}) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onChoose}>
        <View style={styles.view}>
          <Image source={{uri: flag}} resizeMode="contain" style={styles.flag} />
          <Text style={styles.text}>{t(name)}</Text>
        </View>
        {language === languageName && (
          <Image resizeMode="contain" style={styles.chooseIcon} source={{uri: uri}} />
        )}
      </TouchableOpacity>
    </View>
  )
}

export default memo(ChooseLanguageButton)
