import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  ImageBackground,
  Alert,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useMutation} from 'react-query'
import {useTranslation} from 'react-i18next'
import {Switch} from 'react-native-switch'
import {connect} from 'react-redux'

import TextInput from '../../component/unuse/TextInput'
import PasswordInput from '../../component/unuse/PasswordInput'
import Button from '../../component/unuse/Button'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import LoadingIndicator from '../../component/loading/LoadingIndicator'
import axios from '../../config/axios'
import {setUser as setEmail} from '../../redux/action/userAction'
import validateLoginInput from '../../utils/validate/loginValidate'
import styles from '../../assets/styles/pages/Login'
import {switchColor} from '../../assets/styles'
import {LoginBackground, phoneIcon} from '../../assets/images'

function Login(props) {
  const {navigation} = props
  const [phone, setPhone] = useState()
  const [phoneText, setPhoneText] = useState('')
  const [password, setPassword] = useState()
  const [passwordText, setPasswordText] = useState('')
  const {t} = useTranslation()
  const [isEnabled, setIsEnabled] = useState(false)
  const [loading, setLoading] = useState(true)

  const submit = () => {
    const {errors, isValid} = validateLoginInput({phone, password})
    if (isValid) {
      // @ts-ignore
      mutateAsync({phone, password})
    } else {
      setPhoneText(errors.phone)
      setPasswordText(errors.password)
    }
  }

  const {isLoading, mutateAsync} = useMutation(
    'login',
    (values) => axios.post('/user/phone-login', values),
    {
      onError: (err) => Alert.alert('' + err),
      onSuccess: async (res) => {
        try {
          const data = res.data
          if (data.message === 'error') {
            Alert.alert(data.error)
          } else {
            if (data.token) {
              await AsyncStorage.setItem('token', res.data.token)
              if (isEnabled) {
                await AsyncStorage.setItem('remember', 'true')
                await AsyncStorage.setItem('phone', phone)
                await AsyncStorage.setItem('password', password)
              } else {
                await AsyncStorage.setItem('remember', 'false')
              }
              navigation.navigate('Dashboard')
            } else {
              Alert.alert(data.success)
            }
          }
        } catch (e) {
          alert('' + e)
        }
      },
    },
  )

  const SwitchRegister = () => navigation.navigate('Register')

  useEffect(() => {
    async function handleStart() {
      const remember = await AsyncStorage.getItem('remember')
      if (remember === 'true') {
        const rememberPhone = await AsyncStorage.getItem('phone')
        const rememberPassword = await AsyncStorage.getItem('password')
        // @ts-ignore
        setPhone(rememberPhone)
        // @ts-ignore
        setPassword(rememberPassword)
        setIsEnabled(true)
      }
      setLoading(false)
    }
    handleStart()
  }, [])

  const Loading = isLoading

  if (loading) {
    return <LoadingIndicator />
  } else {
    return (
      <ImageBackground style={styles.container} source={{uri: LoginBackground}}>
        {Loading && <OverlayIndicator />}
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex}
        >
          <View style={styles.containerLogin}>
            <View style={styles.content}>
              <View style={styles.containerText}>
                <Text style={styles.loginTitle}>{t('Login')}</Text>
                <Text style={styles.loginCaption}>{t('Logins.Sign')}</Text>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  icon={<Image source={{uri: phoneIcon}} style={styles.icon} />}
                  placeholder={t('Logins.placeholder.PhoneNumber')}
                  setValue={setPhone}
                  helperText={phoneText}
                  autoCompleteType="tel"
                  resetForm={() => setPhoneText('')}
                  maxLength={10}
                  value={phone}
                />
                <PasswordInput
                  placeholder={t('Logins.placeholder.Password')}
                  setValue={setPassword}
                  autoCompleteType="password"
                  helperText={passwordText}
                  resetForm={() => setPasswordText('')}
                  value={password}
                />
                <View style={styles.rememberView}>
                  <View style={styles.row}>
                    <View style={styles.switchView}>
                      <Switch
                        value={isEnabled}
                        onValueChange={(val) => setIsEnabled(val)}
                        circleSize={15}
                        barHeight={15}
                        renderActiveText={false}
                        renderInActiveText={false}
                        circleBorderWidth={0}
                        backgroundActive={switchColor.backgroundActive}
                        backgroundInactive={switchColor.backgroundInactive}
                        circleActiveColor={switchColor.circleActiveColor}
                        circleInActiveColor={switchColor.circleInActiveColor}
                        switchLeftPx={2}
                        switchRightPx={2}
                        switchWidthMultiplier={2}
                        switchBorderRadius={30}
                      />
                    </View>
                    <Text style={styles.text}>{t('Logins.Remember-me')}</Text>
                  </View>
                  <Pressable>
                    <Text
                      style={styles.forgotText}
                      onPress={() => navigation.navigate('PasswordRecovery')}
                    >
                      {t('Logins.Forgot-Password')}
                    </Text>
                  </Pressable>
                </View>

                <Button onPress={submit} texts={t('Login')} />
                <View style={styles.containerRegister}>
                  <Text style={styles.text}>{t('Logins.Don’t-have-an-account')}</Text>
                  <Pressable onPress={SwitchRegister}>
                    <Text style={styles.registerText}> {t('Logins.Sign-up')}</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

export default Login
