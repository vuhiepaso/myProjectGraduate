import React, {memo} from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Image, View, Text, AsyncStorage} from 'react-native'
import {useTranslation} from 'react-i18next'
import styles from './styles'

function ChooseLanguageView({language, flag, name, uri, languageName}) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}
    >
        <View style = {styles.view}>
          <Image source={{uri: flag}} resizeMode="contain" style = {styles.flag}/>
          <Text style={styles.text}>{t(name)}</Text>
        </View>
        {language === languageName && <Image resizeMode="contain" source={{uri: uri}} />}
      </TouchableOpacity>
    </View>
  )
}

export default memo(ChooseLanguageView)
