import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Image} from 'react-native'

import styles from '../assets/styles/navigation/DashboardTab'
import PersonalStack from './PersonalStack'
import {greyTextColor, primaryColor, whiteColor} from '../assets/styles'
import {cartBoldIcon, heartIcon, homeIcon, personalIcon} from '../assets/images'
import DashboardStack from './DashboardStack'
import FavoriteStack from './FavoriteStack'
import CartStack from './CartStack'
import {CustomTabBarButton, CustomTabBarIcon} from '../component/tab'

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
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={{
                uri: heartIcon,
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
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: () => <CustomTabBarIcon icon={cartBoldIcon} />,
          // @ts-ignore
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
          tabBarBadgeStyle: styles.tabBarStyle,
        }}
      />
    </Tab.Navigator>
  )
}

export default DashboardTab
