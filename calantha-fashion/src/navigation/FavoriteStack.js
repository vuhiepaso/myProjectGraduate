import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useTranslation} from 'react-i18next'
import Favorite from '../pages/Favorite'

const Stack = createStackNavigator()

const FavoriteStack = () => {
  const {t} = useTranslation()
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerLeft: null,
          headerTitle: t('Favorite.title'),
        }}
      />
    </Stack.Navigator>
  )
}
export default FavoriteStack
