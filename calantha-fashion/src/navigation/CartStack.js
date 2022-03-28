import React from 'react'
import {useTranslation} from 'react-i18next'
import {createStackNavigator} from '@react-navigation/stack'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

const Stack = createStackNavigator()

const CartStack = () => {
  const {t} = useTranslation()
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
      initialRouteName="Cart"
    >
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{title: t('Cart.name'), headerLeft: null}}
      />
      <Stack.Screen name="Checkout" component={Checkout} options={{title: t('Checkout.name')}} />
    </Stack.Navigator>
  )
}

export default CartStack
