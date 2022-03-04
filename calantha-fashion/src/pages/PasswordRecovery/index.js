import React, {useState} from 'react'
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  StatusBar,
} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useMutation} from 'react-query'

import TextInput from '../../component/view/TextInput'
import { DefaultButton } from '../../component/view'
import validatePhone from '../../utils/validate/phoneValidate' 
import styles from '../../assets/styles/pages/PasswordRecoveryStyles'
import axios from '../../config/axios'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import {PasswordRecoveryBackground, phoneIcon} from '../../assets/images'

export default function PasswordRecovery(props) {
  const [phone, setPhone] = useState()
  const [phoneText, setPhoneText] = useState('')
  const {t} = useTranslation()

  const Verify = () => {
    const {errors, isValid} = validatePhone(phone)
    if (isValid) {
      // @ts-ignore
      mutateAsync({phone})
    } else {
      setPhoneText(errors.phone)
    }
  }
  const resetForm = () => {
    setPhoneText('')
  }
  const {isLoading, mutateAsync} = useMutation(
    'login',
    (values) => axios.post('/user/select-user', values),
    {
      onError: (err) => Alert.alert('1' + err),
      onSuccess: async (res) => {
        try {
          const data = res.data
          if (data.message === 'error') {
            Alert.alert('' + data.error)
          } else {
            if (data.user) {
              props.navigation.navigate('EnterPassword', {data: phone})
            }
          }
        } catch (e) {
          alert('' + e)
        }
      },
    },
  )
  const Loading = isLoading
  return (
    <ImageBackground style={styles.container} source={{uri: PasswordRecoveryBackground}}>
      {Loading && <OverlayIndicator />}
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{t('ForgotPassword.title')}</Text>
          <Text style={styles.instruct}>{t('ForgotPassword.instruct')}</Text>
          <TextInput
            icon={<Image source={{uri: phoneIcon}} style={styles.icon} />}
            placeholder={t('ForgotPassword.PhoneNumber')}
            setValue={setPhone}
            resetForm={resetForm}
            helperText={phoneText}
            maxLength={10}
          />
          <DefaultButton 
            onClick={Verify}
            buttonName={t('ForgotPassword.Button')}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

