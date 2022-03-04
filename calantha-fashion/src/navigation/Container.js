import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'

import GetStarted from '../pages/GetStarted'
import Login from '../pages/Login'
import PasswordRecovery from '../pages/PasswordRecovery'
import Welcome from '../pages/Welcome'
import {whiteColor} from '../assets/styles'
import Register from '../pages/Register'

const Stack = createStackNavigator()
const Container = () => {
  const {t} = useTranslation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          title: t('Welcome.title'),
          headerTintColor: 'white',
          headerTransparent: true,
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: t('Register.title'),
          headerTransparent: true,
          headerTintColor: whiteColor,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: t('Login'),
          headerTintColor: whiteColor,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{
          title: t('Password Recovery'),
          headerTintColor: whiteColor,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default Container
