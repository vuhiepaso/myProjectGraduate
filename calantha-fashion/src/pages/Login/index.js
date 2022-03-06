import React, {useState, useEffect, useCallback} from 'react'
import {
  View,
  Text,
  ImageBackground,
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

import {PasswordInput, DefaultInput, Dialog} from '../../component/view'
import DefaultButton from '../../component/view/DefaultButton'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import LoadingIndicator from '../../component/loading/LoadingIndicator'
import axios from '../../config/axios'
import validateLoginInput from '../../utils/validate/loginValidate'
import styles from '../../assets/styles/pages/LoginStyles'
import {switchColor} from '../../assets/styles'
import {lockIcon, LoginBackground, phoneIcon} from '../../assets/images'
import {handleError} from '../../utils/middleware'

function Login(props) {
  const {navigation} = props
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const [loading, setLoading] = useState(true)

  const {t} = useTranslation()

  const handleClose = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const handleLogin = () => {
    const {errors, isValid} = validateLoginInput({phone, password})
    if (isValid) {
      // @ts-ignore
      mutateAsync({phone, password}).then(async (res) => {
        console.log(res.data)
        if (res.data.token) {
          await AsyncStorage.setItem('token', res.data.token)
          if (isEnabled) {
            await AsyncStorage.setItem('remember', 'true')
            await AsyncStorage.setItem('phone', phone)
            await AsyncStorage.setItem('password', password)
          } else {
            await AsyncStorage.setItem('remember', 'false')
          }
          navigation.navigate('Dashboard')
        }
      })
    } else {
      setPhoneError(errors.phone)
      setPasswordError(errors.password)
    }
  }

  const handleChangePassword = useCallback((e) => {
    setPassword(e)
    setPasswordError('')
  }, [])

  const handleChangePhone = useCallback((e) => {
    setPhone(e)
    setPhoneError('')
  }, [])

  const {isLoading, mutateAsync} = useMutation(
    'login',
    (values) => axios.post('/user/phone-login', values),
    {
      onError: (e) => handleError(e, setModalVisible, setDialogTitle, setDialogContent),
    },
  )

  const handleNavigateRegister = () => navigation.navigate('Register')
  const handleNavigateForgotPassword = () => navigation.navigate('PasswordRecovery')

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

  if (loading) {
    return <LoadingIndicator />
  } else {
    return (
      <ImageBackground style={styles.container} source={{uri: LoginBackground}}>
        <Dialog
          title={dialogTitle}
          content={dialogContent}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleClose={handleClose}
        />
        {isLoading && <OverlayIndicator />}
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex}
        >
          <View style={styles.containerLogin}>
            <View style={styles.content}>
              <View style={styles.containerText}>
                <Text style={styles.loginTitle}>{t('Login.title')}</Text>
                <Text style={styles.loginCaption}>{t('Login.caption')}</Text>
              </View>
              <View style={styles.inputView}>
                <DefaultInput
                  icon={phoneIcon}
                  error={phoneError}
                  onChange={handleChangePhone}
                  placeholder="Login.placeholder.phone"
                  value={phone}
                />
                <PasswordInput
                  placeholder="Login.placeholder.password"
                  error={passwordError}
                  onChange={handleChangePassword}
                  icon={lockIcon}
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
                    <Text style={styles.text}>{t('Login.remember-me')}</Text>
                  </View>
                  <Pressable>
                    <Text style={styles.forgotText} onPress={handleNavigateForgotPassword}>
                      {t('Login.forgot-password')}
                    </Text>
                  </Pressable>
                </View>
                <DefaultButton buttonName={'Login.login-button'} onClick={handleLogin} />
                <View style={styles.containerRegister}>
                  <Text style={styles.text}>{t('Login.button-caption')}</Text>
                  <Pressable onPress={handleNavigateRegister}>
                    <Text style={styles.registerText}> {t('Login.button-title')}</Text>
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
