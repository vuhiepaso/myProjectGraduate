import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image} from 'react-native'

import styles from '../assets/styles/navigation/DashboardTab'
import PersonalStack from './PersonalStack'
import {greyTextColor, primaryColor, whiteColor} from '../assets/styles'
import {cartBoldIcon, heartIcon, homeIcon, personalIcon} from '../assets/images'
import DashboardStack from './DashboardStack'

const Tab = createBottomTabNavigator()

const DashboardTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardStack"
      screenOptions={{
        unmountOnBlur: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={{
                uri: homeIcon,
              }}
              resizeMode="contain"
              width={28}
              height={28}
              style={{
                width: focused ? 28 : 24,
                height: focused ? 28 : 24,
                tintColor: focused ? primaryColor : greyTextColor,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PersonalStack"
        component={PersonalStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={{
                uri: personalIcon,
              }}
              resizeMode="contain"
              width={28}
              height={28}
              style={{
                width: focused ? 28 : 24,
                height: focused ? 28 : 24,
                tintColor: focused ? primaryColor : greyTextColor,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default DashboardTab
