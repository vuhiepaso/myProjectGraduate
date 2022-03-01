import React, {useEffect, useState} from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native'
import {useTranslation} from 'react-i18next'
import * as Google from 'expo-google-app-auth'
import {StatusBar} from 'expo-status-bar'
import {useMutation} from 'react-query'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {connect} from 'react-redux'
import i18next from 'i18next'

import styles from '../../assets/styles/pages/Welcome'
import {androidClientId, iosClientId} from '../../config/keys'
import {
  welcomeBackground,
  googleIcon,
  createAccountIcon,
} from '../../assets/images'
import client from '../../config/api'
import {setUser as setEmail} from '../../redux/action/userAction'
import OverlayIndicator from '../../component/loading/OverlayIndicator'
import LoadingIndicator from '../../component/loading/LoadingIndicator'

function Welcome(props) {
  const {navigation, createUserEmail} = props
  const {t} = useTranslation()
  const [Loading, setLoading] = useState(true)

  const {isLoading, mutateAsync} = useMutation('google-login', (values) =>
    client.post('/user/google-login', values),
  )

  const SignInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
        iosClientId: iosClientId,
        clientId: androidClientId,
        scopes: ['profile', 'email'],
      })
      if (result.type === 'success') {
        LoginGoogle(result)
      }
    } catch (error) {
      alert('' + error)
    }
  }

  const LoginGoogle = (result) => {
    mutateAsync({email: result.user.email, email_token: result.accessToken})
      .then(async (res) => {
        const data = res.data
        if (data.message === 'error') {
          alert('' + data.error)
        } else {
          if (data.success === 'found') {
            try {
              await AsyncStorage.setItem('token', data.token)
              navigation.navigate('Dashboard')
            } catch (error) {
              alert('async storage: ' + error)
            }
          } else {
            createUserEmail(data.email)
            navigation.navigate('Register')
          }
        }
      })
      .catch((err) => {
        alert('' + err)
      })
  }

  const SwitchRegister = () => {
    createUserEmail('')
    navigation.navigate('Register')
  }

  const SwitchLogin = () => navigation.navigate('Login')

  useEffect(async () => {
    const getStarted = await AsyncStorage.getItem('first-time')
    if (getStarted !== 'false') {
      navigation.navigate('GetStarted')
    }
    const language = await AsyncStorage.getItem('language')
    switch (language) {
      case 'vi':
        await i18next.changeLanguage('vi')
        break
      default:
        await i18next.changeLanguage('en')
        break
    }
    setLoading(false)
  }, [])

  if (Loading) {
    return <LoadingIndicator />
  } else {
    return (
      <View style={styles.container}>
        {isLoading && <OverlayIndicator />}
        <StatusBar style="light" />
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
              <TouchableOpacity
                style={styles.googleButton}
                onPress={SignInWithGoogle}
              >
                <Image style={styles.icon} source={{uri: googleIcon}} />
                <Text style={styles.googleText}>
                  {t('Welcome.google-button')}
                </Text>
                <View style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.createAccountButton}
                onPress={() => SwitchRegister()}
              >
                <Image
                  style={styles.createIcon}
                  source={{uri: createAccountIcon}}
                />
                <Text style={styles.createAccountText}>
                  {t('Welcome.register-button')}
                </Text>
                <View style={styles.icon} />
              </TouchableOpacity>
              <View style={styles.login}>
                <Text style={styles.loginText}>
                  {t('Welcome.login-caption')}
                </Text>
                <Pressable onPress={SwitchLogin}>
                  <Text style={styles.loginButton}>
                    {t('Welcome.login-button')}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.CreateUser,
})

const mapDispatchToProps = (dispatch) => ({
  createUserEmail: (email) => dispatch(setEmail(email)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
