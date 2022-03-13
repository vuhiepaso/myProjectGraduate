import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'

import Dashboard from '../pages/Dashboard'
import List from '../pages/List'

const Stack = createStackNavigator()

const DashboardStack = () => {
  const {t} = useTranslation()
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  )
}
export default DashboardStack
