import React, {useEffect} from 'react'
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import {useTranslation} from 'react-i18next'

import {
  anonymousAvatar,
  phoneIcon,
  locationIcon,
  personalIcon,
  navigationIcon,
  contactIcon,
  languageIcon,
  logoutIcon,
  billIcon,
  packIcon,
  shipIcon,
  reviewIcon,
} from '../../../assets/images'
import styles from '../../../assets/styles/pages/Personal'
import client from '../../../config/axios'
import {useQuery} from 'react-query'
import LoadingIndicator from '../../../component/loading/LoadingIndicator'
import {isEmpty} from '../../../utils/validate/index'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Personal({navigation}) {
  const {t} = useTranslation()

  const {data: userData, isLoading} = useQuery(
    'user-information',
    () => client.get('/user/information'),
    {
      onError: (err) => console.log('' + err), // handle error
      onSuccess: (res) => {
        const user = res?.data?.data || {}
        // setUser(user)
      },
    },
  )

  const handleNavigateHistory = () => navigation.navigate('History')

  const user = userData?.data?.data // set state user is empty object before call api

  if (isLoading) {
    return <LoadingIndicator />
  } else {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
          <View style={styles.informationView}>
            <Image
              source={{
                uri: isEmpty(user?.avatar) ? anonymousAvatar : user?.avatar,
              }}
              style={styles.avatar}
            />
            <View style={styles.information}>
              <View style={styles.row}>
                <Image source={{uri: personalIcon}} style={styles.icon} />
                <Text style={styles.informationText}>{user?.full_name}</Text>
              </View>
              <View style={styles.row}>
                <Image source={{uri: phoneIcon}} style={styles.icon} />
                <Text style={styles.informationText}>{user?.phone}</Text>
              </View>
              <View style={styles.row}>
                <Image source={{uri: locationIcon}} style={styles.icon} />
                <Text style={styles.informationText}>{user?.address}</Text>
              </View>
            </View>
          </View>

          <View style={styles.purchaseView}>
            <View style={styles.title}>
              <Text style={styles.titleText}>{t('Personal.My-order')}</Text>
              <TouchableOpacity onPress={handleNavigateHistory} style={styles.historyButton}>
                <Text style={styles.historyText}>{t('Personal.Purchase-history')}</Text>
                <Image source={{uri: navigationIcon}} style={styles.historyIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.purchase}>
              <TouchableOpacity
                onPress={() => navigation.navigate('History')} // 76
                style={styles.purchaseContainer}
              >
                <Image resizeMode="stretch" source={{uri: billIcon}} style={styles.purchaseIcon} />
                <Text style={styles.purchaseText}>{t('Personal.Order')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('History')} // 76
                style={styles.purchaseContainer}
              >
                <Image resizeMode="stretch" source={{uri: packIcon}} style={styles.purchaseIcon} />
                <Text style={styles.purchaseText}>{t('Personal.Pack')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('History')} // 76
                style={styles.purchaseContainer}
              >
                <Image source={{uri: shipIcon}} resizeMode="stretch" style={styles.purchaseIcon} />
                <Text style={styles.purchaseText}>{t('Personal.Ship')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('History')} // 76
                style={styles.purchaseContainer}
              >
                <Image
                  resizeMode="stretch"
                  source={{uri: reviewIcon}}
                  style={styles.purchaseIcon}
                />
                <Text style={styles.purchaseText}>{t('Personal.Review')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PersonalInformation')} // create handle function
              style={styles.button}
            >
              <View style={styles.buttonData}>
                <Image
                  resizeMode="contain"
                  source={{uri: personalIcon}}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>{t('Personal.PersonalInformation')}</Text>
              </View>
              <Image
                resizeMode="contain"
                source={{uri: navigationIcon}}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonData}>
                <Image
                  resizeMode="contain"
                  source={{uri: locationIcon}}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>{t('Personal.DeliveryAddress')}</Text>
              </View>
              <Image
                resizeMode="contain"
                source={{uri: navigationIcon}}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Contact', {
                  room: user?.user_id,
                  avatar: user?.avatar,
                })
              } //  create handle function
              style={styles.button}
            >
              <View style={styles.buttonData}>
                <Image source={{uri: contactIcon}} resizeMode="contain" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>{t('Personal.StoreContact')}</Text>
              </View>
              <Image
                resizeMode="contain"
                source={{uri: navigationIcon}}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Language')}
              // create handle function
              style={styles.button}
            >
              <View style={styles.buttonData}>
                <Image
                  resizeMode="contain"
                  source={{uri: languageIcon}}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>{t('Personal.Language')}</Text>
              </View>
              <Image
                resizeMode="contain"
                source={{uri: navigationIcon}}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Welcome')}
              //  create handle function
              style={styles.button}
            >
              <View style={styles.buttonData}>
                <Image resizeMode="contain" source={{uri: logoutIcon}} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>{t('Personal.Logout')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}
