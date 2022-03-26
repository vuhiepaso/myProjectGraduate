import React, {useCallback, useEffect, useState} from 'react'
import i18next from 'i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {ChooseLanguageButton, DefaultButton} from '../../component/view'
import {vietNamFlag, englandFlag, correctIcon} from '../../assets/images'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'

export default function Language({navigation}) {
  const [loading, setLoading] = useState(true)
  const [language, setLanguage] = useState('en')

  const handleSubmit = async () => {
    await AsyncStorage.setItem('language', language || 'en')
    i18next.changeLanguage(language || 'en')
    navigation.navigate('Personal')
  }

  useEffect(() => {
    const handleStart = async () => {
      const currentLanguage = await AsyncStorage.getItem('language')
      setLanguage(currentLanguage || 'en')
      setLoading(false)
    }
    handleStart()
  }, [])

  if (loading) {
    return <LoadingIndicator />
  }
  return (
    <DefaultLayout statusBarStyle="dark-content">
      <ScrollLayout>
        <ChooseLanguageButton
          flag={vietNamFlag}
          languageName={'vi'}
          name={'languages.vi'}
          language={language}
          uri={correctIcon}
          onChoose={() => setLanguage('vi')}
        />
        <ChooseLanguageButton
          flag={englandFlag}
          languageName={'en'}
          name={'languages.en'}
          language={language}
          uri={correctIcon}
          onChoose={() => setLanguage('en')}
        />
        <DefaultButton onClick={handleSubmit} buttonName={'Language.submit'} />
      </ScrollLayout>
    </DefaultLayout>
  )
}
