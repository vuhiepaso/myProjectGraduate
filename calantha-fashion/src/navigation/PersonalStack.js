import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'

import Personal from '../pages/Personal'
import PersonalInformation from '../pages/PersonalInformation'
import Contact from '../pages/Contact'
import Address from '../pages/Address'
import AddAddress from '../pages/AddAddress'
import ModifyAddress from '../pages/ModifyAddress'
import TopTab from './TopTab'

const Stack = createStackNavigator()

const PersonalStack = () => {
  const {t} = useTranslation()
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}} initialRouteName="Personal">
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
          headerTitle: t('PersonalInformation.title'),
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          headerTitle: t('Contact.name'),
        }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={{
          headerTitle: t('Address.name'),
        }}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          headerTitle: t('AddAddress.name'),
        }}
      />
      <Stack.Screen
        name="ModifyAddress"
        component={ModifyAddress}
        options={{
          headerTitle: t('ModifyAddress.name'),
        }}
      />
      <Stack.Screen name="History" component={TopTab} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}
export default PersonalStack
