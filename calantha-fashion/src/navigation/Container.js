import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'

import GetStarted from '../pages/GetStarted'
import {whiteColor} from '../assets/styles'
import Register from '../pages/Register'
import Language from '../pages/Language'

const Stack = createStackNavigator()
const Container = () => {
  const {t} = useTranslation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      initialRouteName="Language"
    >
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
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
        name="Language"
        component={Language}
        options={{
          title: t('Language.title'),
        }}
      />
    </Stack.Navigator>
  )
}

export default Container
