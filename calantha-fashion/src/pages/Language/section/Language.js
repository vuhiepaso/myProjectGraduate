import React, {useEffect, useState} from 'react'
import {ChooseLanguageView, DefaultButton} from '../../../component/view'
import {} from '../../../assets/images'
import { Image, View, Text, AsyncStorage} from 'react-native'

import {disableTextColor} from '../../../assets/styles'
import {vietNamFlag, englandFlag, correctIcon} from '../../../assets/images'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'
export default function Language(props) {
  const {navigation} = props
  const {t} = useTranslation()
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState('en')

  const SubmitPress = async () => {
    await AsyncStorage.setItem('language', language)
    i18next.changeLanguage(language)
  }

  return (
    <View style = {{backgroundColor: disableTextColor, height: '100%'}}>
      {/*  */}
      <ChooseLanguageView
        flag={vietNamFlag}
        languageName={'vi'}
        name={t('languages.vi')}
        language={language}
        uri={correctIcon}
      />
      <ChooseLanguageView
        flag={englandFlag}
        languageName={'en'}
        name={t('languages.vi')}
        language={language}
        uri={correctIcon}
      />
      <DefaultButton
        action={SubmitPress()}
        buttonName = {'Language.submit'}
      />

    </View>
  )
}
