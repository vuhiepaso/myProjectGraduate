import React, {useCallback, useState} from 'react'
import {View, Text, ImageBackground, KeyboardAvoidingView, Platform, StatusBar} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useMutation} from 'react-query'
import {useDispatch} from 'react-redux'

import {DefaultButton, DefaultInput, Dialog} from '../../component/view'
import validatePhone from '../../utils/validate/phoneValidate'
import styles from '../../assets/styles/pages/PasswordRecoveryStyles'
import axios from '../../config/axios'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import {passwordRecoveryBackground, phoneIcon} from '../../assets/images'
import {handleError} from '../../utils/middleware'
import {setUserNavigatePage} from '../../redux/action/userAction'

export default function PasswordRecovery({navigation}) {
  const dispatch = useDispatch()
  const [phone, setPhone] = useState()
  const [phoneError, setPhoneError] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const {t} = useTranslation()

  const {isLoading, mutateAsync: send} = useMutation('password-recovery', (values) =>
    axios.post('/user/select-user', values),
  )

  const handleForgotPassword = () => {
    const {errors, isValid} = validatePhone(phone)
    if (!isValid) {
      setPhoneError(errors.phone)
    } else {
      // @ts-ignore
      send(phone)
        .then((res) => {
          dispatch(
            // @ts-ignore
            setUserNavigatePage({phone, otp_token: res.otp_token, navigate: 'ResetPassword'}),
          )
          navigation.navigate('VerifyOTP')
        })
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  const handleChangePhone = useCallback((e) => {
    setPhone(e)
    setPhoneError('')
  }, [])

  const handleClose = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  return (
    <ImageBackground style={styles.container} source={{uri: passwordRecoveryBackground}}>
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleClose={handleClose}
      />
      {isLoading && <OverlayIndicator />}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{t('ForgotPassword.title')}</Text>
          <Text style={styles.instruct}>{t('ForgotPassword.instruct')}</Text>
          <DefaultInput
            error={phoneError}
            icon={phoneIcon}
            placeholder="ForgotPassword.placeholder.phone"
            onChange={handleChangePhone}
          />
          <DefaultButton onClick={handleForgotPassword} buttonName="ForgotPassword.Button" />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
