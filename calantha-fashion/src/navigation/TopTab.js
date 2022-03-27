import React from 'react'
import {useTranslation} from 'react-i18next'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import styles from '../assets/styles/navigation/TopTabStyles'
import Order from '../pages/Order'
import Pack from '../pages/Pack'
import Ship from '../pages/Ship'
import Receive from '../pages/Receive'

const Tab = createMaterialTopTabNavigator()

const TopTab = () => {
  const {t} = useTranslation()
  return (
    <Tab.Navigator
      initialRouteName="Order"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: styles.indicator,
      }}
    >
      <Tab.Screen name={'Order'} component={Order} options={{title: t('Order.name')}} />
      <Tab.Screen name={'Pack'} component={Pack} options={{title: t('Pack.name')}} />
      <Tab.Screen name={'Ship'} component={Ship} options={{title: t('Ship.name')}} />
      <Tab.Screen name={'Receive'} component={Receive} options={{title: t('Receive.name')}} />
    </Tab.Navigator>
  )
}

export default TopTab
