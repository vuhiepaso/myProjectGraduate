import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'

import Personal from '../pages/TabView/Personal'
import PersonalInformation from '../pages/TabView/Personal/PersonalInformation'
import TakePhoto from '../pages/TabView/Personal/PersonalInformation/TakePhoto'
import Test from '../pages/TabView/Personal/Test'

const Stack = createStackNavigator()

const PersonalStack = () => {
  const { t } = useTranslation()
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="Personal"
        component={Personal}
        options={{
          headerLeft: null,
          headerTitle: t('Personal.title'),
        }}
      />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{
          headerTitle: t('Personal.PersonalInformation.title'),
        }}
      />
      <Stack.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={{
          headerTitle: t('Personal.TakePhoto.title'),
        }}
      />
    </Stack.Navigator>
  )
}
export default PersonalStack
