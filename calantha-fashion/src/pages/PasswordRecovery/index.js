import React, {useState} from 'react'
import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {useTranslation} from 'react-i18next'
import {useMutation} from 'react-query'

import TextInput from '../../component/view/TextInput'
import Button from '../../component/view/Button'
import validatePhone from '../../utils/validate/phoneValidate'
import {
  MaxWidth,
  PrimaryTextSize,
  TextBold,
  TitleTextSize,
  WhiteColor,
  GreyTextColor,
} from '../../assets/styles/index'
import client from '../../config/api'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import {PasswordRecoveryBackground, phoneIcon} from '../../assets/images'

export default function PasswordRecovery(props) {
  const [phone, setPhone] = useState()
  const [phoneText, setPhoneText] = useState('')
  const {t} = useTranslation()

  const Verify = () => {
    const {errors, isValid} = validatePhone(phone)
    if (isValid) {
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
    (values) => client.post('/user/select-user', values),
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
    <ImageBackground
      style={styles.container}
      source={{uri: PasswordRecoveryBackground}}
    >
      {Loading && <OverlayIndicator />}
      <StatusBar style="light" />
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
          <Button texts={t('ForgotPassword.Button')} onPress={Verify} />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    minHeight: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    maxWidth: MaxWidth,
  },
  title: {
    fontSize: TitleTextSize,
    color: WhiteColor,
    fontWeight: TextBold,
  },
  instruct: {
    fontSize: PrimaryTextSize,
    color: WhiteColor,
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: GreyTextColor,
  },
})
