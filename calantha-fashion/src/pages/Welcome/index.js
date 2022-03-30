import React, {useCallback, useEffect, useState} from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
  StatusBar,
} from 'react-native'
import {useTranslation} from 'react-i18next'
import * as Google from 'expo-google-app-auth'
import {useMutation} from 'react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'

import axios from '../../config/axios'
import {Dialog} from '../../component/view'
import styles from '../../assets/styles/pages/WelcomeStyles'
import {welcomeBackground, googleIcon, createAccountIcon} from '../../assets/images'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import LoadingIndicator from '../../component/loading/LoadingIndicator'
import {handleError} from '../../utils/middleware'
import {googleConfig} from '../../config'
import {useDispatch} from 'react-redux'
import {setUserAfterGoogleRegister} from '../../redux/action/userAction'

function Welcome({navigation}) {
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const [Loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const handleClose = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const {isLoading, mutateAsync} = useMutation('google-login', (values) =>
    axios.post('/user/google-login', values),
  )

  const signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync(googleConfig)
      if (result.type === 'success')
        loginUser({email: result.user.email, email_token: result.accessToken})
    } catch (error) {
      alert(`${error}`)
    }
  }

  const loginUser = ({email, email_token}) => {
    // @ts-ignore
    mutateAsync({email, email_token})
      .then(async (res) => {
        const {message, token} = res.data
        if (message === 'User existed') {
          try {
            await AsyncStorage.setItem('token', token)
            navigation.push('Dashboard')
          } catch (error) {
            console.log(error)
          }
        } else {
          dispatch(setUserAfterGoogleRegister({email: email}))
          navigation.push('Register')
        }
      })
      .catch((e) => handleError(e, setModalVisible, setDialogTitle, setDialogContent))
  }

  const handleNavigateRegister = () => navigation.navigate('Register')
  const handleNavigateLogin = () => navigation.navigate('Login')

  useEffect(() => {
    async function handleStart() {
      const getStarted = await AsyncStorage.getItem('get-started')
      if (getStarted !== 'false') navigation.navigate('GetStarted')
      const language = await AsyncStorage.getItem('language')
      switch (language) {
        case 'vi':
          await i18next.changeLanguage('vi')
          break
        case 'en':
        default:
          await i18next.changeLanguage('en')
          break
      }
      setLoading(false)
    }
    handleStart()
  }, [])

  if (Loading) {
    return <LoadingIndicator />
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        {isLoading && <OverlayIndicator />}
        <Dialog
          title={dialogTitle}
          content={dialogContent}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleClose={handleClose}
        />
        <ImageBackground
          source={{
            uri: welcomeBackground,
          }}
          style={styles.imageBackground}
        >
          <View style={styles.content}>
            <View style={styles.welcomeView}>
              <Text style={styles.title}>{t('Welcome.title')}</Text>
              <Text style={styles.caption}>{t('Welcome.caption')}</Text>
              <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
                <Image style={styles.icon} source={{uri: googleIcon}} />
                <Text style={styles.googleText}>{t('Welcome.google-button')}</Text>
                <View style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.createAccountButton} onPress={handleNavigateRegister}>
                <Image style={styles.createIcon} source={{uri: createAccountIcon}} />
                <Text style={styles.createAccountText}>{t('Welcome.register-button')}</Text>
                <View style={styles.icon} />
              </TouchableOpacity>
              <View style={styles.login}>
                <Text style={styles.loginText}>{t('Welcome.link-caption')}</Text>
                <Pressable onPress={handleNavigateLogin}>
                  <Text style={styles.loginButton}>{t('Welcome.link-button')}</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Welcome
