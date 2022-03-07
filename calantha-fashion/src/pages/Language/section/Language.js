import React, {useEffect, useState} from 'react'
import {ChooseLanguageView, DefaultButton} from '../../../component/view'
import {Image, View, Text, AsyncStorage, ActivityIndicator, Dimensions} from 'react-native'

import {disableTextColor} from '../../../assets/styles'
import {vietNamFlag, englandFlag, correctIcon} from '../../../assets/images'
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'

const {width, height} = Dimensions.get('screen')
export default function Language(props) {
  const {navigation} = props
  const {t} = useTranslation()
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState('en')

  const SubmitPress = async () => {
    await AsyncStorage.setItem('language', language)
    i18next.changeLanguage(language)
  }
  useEffect(async () => {
    const l = await AsyncStorage.getItem('language')
    setLanguage(l)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <View
        style={{
          width: width,
          height: height,
          top: 0,

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator color="#000000" />
      </View>
    )
  } else {
    return (
      <View style={{backgroundColor: disableTextColor, height: '100%'}}>
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
        <DefaultButton action={SubmitPress()} buttonName={'Language.submit'} />
      </View>
    )
  }
}
