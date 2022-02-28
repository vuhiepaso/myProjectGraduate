import React, {useState, useEffect, useRef} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useTranslation} from 'react-i18next'

import {images} from '../../themes/default'
import {DefaultLayout} from '../../component/layout'
import {primaryColor, whiteColor} from '../../assets/styles'
import Background from './section/Background'
import Adapter from './section/Adapter'

export default function GetStarted(props) {
  const {navigation} = props
  const [position, setPosition] = useState(0)
  const [buttonName, setButtonName] = useState('')
  const pagerRef = useRef(null)
  const {t} = useTranslation()

  const handleSwitch = async () => {
    pagerRef.current?.setPage(position + 1)
    setPosition(position + 1)
    if (buttonName === t('GetStarted.skip')) {
      await AsyncStorage.setItem('get-started', 'false')
      navigation.navigate('Welcome')
    }
  }

  useEffect(() => {
    if (position <= 0) {
      setButtonName(t('GetStarted.get-started'))
    } else if (position >= images.length - 1) {
      setButtonName(t('GetStarted.skip'))
    } else {
      setButtonName(t('GetStarted.next'))
    }
  }, [position])

  return (
    <DefaultLayout statusBarStyle="light-content">
      <Background backgrounds={images} setPosition={setPosition} pagerRef={pagerRef} />
      <Adapter
        images={images}
        position={position}
        onSwitch={handleSwitch}
        buttonName={buttonName}
        activeColor={primaryColor}
        inActiveColor={whiteColor}
      />
    </DefaultLayout>
  )
}
