import React, {useCallback, useState} from 'react'
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
import {useTranslation} from 'react-i18next'
import {useDispatch} from 'react-redux'

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
  birthIcon,
} from '../../../assets/images'
import {Dialog} from '../../../component/view'
import {LoadingIndicator} from '../../../component/loading'
import client from '../../../config/axios'
import {useQuery} from 'react-query'
import {handleError} from '../../../utils/middleware'
import styles from '../../../assets/styles/pages/Personal'
import {setNavigateContact} from '../../../redux/action/contactAction'
import {getBadges} from '../../../api/personalApi'

export default function Personal({navigation}) {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {data: user, isLoading} = useQuery(
    'user-information',
    () => client.get('/user/information'),
    {onError: (e) => handleError(e, setModalVisible, setDialogTitle, setDialogContent)},
  )

  const {data: badges, isLoading: billsLoading} = getBadges()

  const handleNavigateOrder = () => navigation.navigate('History', {screen: 'Order'})
  const handleNavigatePack = () => navigation.navigate('History', {screen: 'Pack'})
  const handleNavigateShip = () => navigation.navigate('History', {screen: 'Ship'})
  const handleNavigateReceive = () => navigation.navigate('History', {screen: 'Receive'})
  const handleNavigateAddress = () => navigation.navigate('Address')
  const handleNavigatePersonalInformation = () => navigation.navigate('PersonalInformation')
  const handleNavigateLanguage = () => navigation.navigate('Language')
  const handleNavigateWelcome = () => navigation.navigate('Welcome')
  const handleNavigateContact = () => {
    dispatch(setNavigateContact({user_id: user?.data?.data?.user_id, avatar: user?.data?.avatar}))
    navigation.navigate('Contact')
  }
  const handleClose = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  if (isLoading) {
    return <LoadingIndicator />
  } else {
    return (
      <View style={styles.container}>
        <Dialog
          title={dialogTitle}
          content={dialogContent}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleClose={handleClose}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
          <View style={styles.informationView}>
            <Image
              source={{
                uri: user?.data?.data?.avatar || anonymousAvatar,
              }}
              style={styles.avatar}
            />
            <View style={styles.information}>
              <View style={styles.row}>
                <Image source={{uri: personalIcon}} style={styles.icon} />
                <Text style={styles.informationText}>{user?.data?.data?.full_name}</Text>
              </View>
              <View style={styles.row}>
                <Image source={{uri: phoneIcon}} style={styles.icon} />
                <Text style={styles.informationText}>{user?.data?.data?.phone}</Text>
              </View>
              <View style={styles.row}>
                <Image source={{uri: birthIcon}} style={styles.icon} />
                <Text style={styles.informationText}>{user?.data?.data?.date_of_birth}</Text>
              </View>
            </View>
          </View>

          <View style={styles.purchaseView}>
            <View style={styles.title}>
              <Text style={styles.titleText}>{t('Personal.My-order')}</Text>
              <TouchableOpacity onPress={handleNavigateOrder} style={styles.historyButton}>
                <Text style={styles.historyText}>{t('Personal.Purchase-history')}</Text>
                <Image source={{uri: navigationIcon}} style={styles.historyIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.purchase}>
              <TouchableOpacity onPress={handleNavigateOrder} style={styles.purchaseContainer}>
                <View>
                  {badges?.data?.data?.orderBadge > 0 && (
                    <View style={styles.badgeContainer}>
                      <Text style={styles.badgeText}>{badges?.data?.data?.orderBadge}</Text>
                    </View>
                  )}
                  <Image
                    resizeMode="stretch"
                    source={{uri: billIcon}}
                    style={styles.purchaseIcon}
                  />
                </View>
                <Text style={styles.purchaseText}>{t('Personal.order')}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleNavigatePack} style={styles.purchaseContainer}>
                <View>
                  {badges?.data?.data?.packBadge > 0 && (
                    <View style={styles.badgeContainer}>
                      <Text style={styles.badgeText}>{badges?.data?.data?.packBadge}</Text>
                    </View>
                  )}
                  <Image
                    resizeMode="stretch"
                    source={{uri: packIcon}}
                    style={styles.purchaseIcon}
                  />
                </View>
                <Text style={styles.purchaseText}>{t('Personal.pack')}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleNavigateShip} style={styles.purchaseContainer}>
                <View>
                  {badges?.data?.data?.shipBadge > 0 && (
                    <View style={styles.badgeContainer}>
                      <Text style={styles.badgeText}>{badges?.data?.data?.shipBadge}</Text>
                    </View>
                  )}
                  <Image
                    resizeMode="stretch"
                    source={{uri: shipIcon}}
                    style={styles.purchaseIcon}
                  />
                </View>
                <Text style={styles.purchaseText}>{t('Personal.ship')}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleNavigateReceive} style={styles.purchaseContainer}>
                <View>
                  {badges?.data?.data?.receiveBadge > 0 && (
                    <View style={styles.badgeContainer}>
                      <Text style={styles.badgeText}>{badges?.data?.data?.receiveBadge}</Text>
                    </View>
                  )}
                  <Image
                    resizeMode="stretch"
                    source={{uri: reviewIcon}}
                    style={styles.purchaseIcon}
                  />
                </View>
                <Text style={styles.purchaseText}>{t('Personal.receive')}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity onPress={handleNavigatePersonalInformation} style={styles.button}>
              <View style={styles.buttonData}>
                <Image
                  resizeMode="contain"
                  source={{uri: personalIcon}}
                  style={styles.buttonIcon}
                />
                <Text style={styles.buttonText}>{t('Personal.PersonalInformation.title')}</Text>
              </View>
              <Image
                resizeMode="contain"
                source={{uri: navigationIcon}}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigateAddress} style={styles.button}>
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

            <TouchableOpacity onPress={handleNavigateContact} style={styles.button}>
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

            <TouchableOpacity onPress={handleNavigateLanguage} style={styles.button}>
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

            <TouchableOpacity onPress={handleNavigateWelcome} style={styles.button}>
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
