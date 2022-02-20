import React, {useState, useEffect, useRef, useCallback} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View, StatusBar} from 'react-native'
import {useTranslation} from 'react-i18next'

import styles from '../../assets/styles/view/GetStarted'
import {images} from '../../themes/default'
import Background from './section/Background'
import Adapter from './section/Adapter'

export default function GetStarted(props) {
  const {navigation} = props
  const [position, setPosition] = useState(0)
  const [buttonName, setButtonName] = useState('')
  const pagerRef = useRef(null)
  const {t} = useTranslation()

  const handleSwitch = useCallback(async () => {
    pagerRef.current?.setPage(position + 1)
    setPosition(position + 1)
    if (buttonName === t('GetStarted.Skip')) {
      await AsyncStorage.setItem('first-time', 'false')
      navigation.navigate('Welcome')
    }
  }, [position, buttonName])

  useEffect(() => {
    if (position <= 0) {
      setButtonName(t('GetStarted.Get-Started'))
    } else if (position >= images.length - 1) {
      setButtonName(t('GetStarted.Skip'))
    } else {
      setButtonName(t('GetStarted.Next'))
    }
  }, [position])

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />
      <Background images={images} setPosition={setPosition} pagerRef={pagerRef} />
      <Adapter
        images={images}
        position={position}
        onSwitch={handleSwitch}
        buttonName={buttonName}
      />
    </View>
  )
}
