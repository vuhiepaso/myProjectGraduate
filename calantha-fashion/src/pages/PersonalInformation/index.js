import React, {useCallback, useEffect, useRef, useState} from 'react'
import {View, Image, Text, ScrollView, TouchableOpacity, TextInput, Pressable} from 'react-native'
import {useDispatch} from 'react-redux'
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet'

import {
  anonymousAvatar,
  phoneIcon,
  personalIcon,
  navigationIcon,
  emailIcon,
  cameraIcon,
  birthIcon,
  mapIcon,
  lockIcon,
} from '../../assets/images'
import styles from '../../assets/styles/pages/PersonalInformationStyles'
import {DefaultButton, DefaultInput, Dialog} from '../../component/view'
import {useQuery} from 'react-query'
import client from '../../config/axios'
import {handleError} from '../../utils/middleware'
import {LoadingIndicator, OverlayIndicator} from '../../component/loading'
import {
  getDefaultAddress,
  sendMessage,
  updateUserInformation,
} from '../../api/personalInformationApi'
import validate from '../../utils/validate/personalInformationValidate'
import {t} from 'i18next'
import {setUserNavigatePage} from '../../redux/action/userAction'

function PersonalInformation({navigation}) {
  const dispatch = useDispatch()
  const bottomSheetModalRef = useRef(null)

  const [avatar, setAvatar] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [fullNameError, setFullNameError] = useState('')
  const [birthday, setBirthday] = useState('')
  const [birthdayError, setBirthdayError] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery('user-information', () => client.get('/user/information'), {
    onError: (e) => handleError(e, setModalVisible, setDialogTitle, setDialogContent),
  })
  const {isLoading: sendMessageLoading, mutateAsync: send} = sendMessage()
  const {data: address, isLoading: addressLoading} = getDefaultAddress()
  const {mutateAsync: updateUser, isLoading: updateLoading} = updateUserInformation()

  const handleClose = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])
  const handleVerify = () => {
    const {errors, isValid} = validate({name: fullName, birthday})
    if (!isValid) {
      setFullNameError(errors.name)
      setBirthdayError(errors.birthday)
    } else {
      // @ts-ignore
      updateUser({
        full_name: fullName,
        date_of_birth: birthday,
        avatar: avatar ? avatar : user?.data?.avatar,
      })
        .then(() => refetch())
        .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
    }
  }

  const handleChangeName = (e) => {
    setFullNameError('')
    setFullName(e)
  }
  const handleChangeAvatar = useCallback(() => {
    bottomSheetModalRef.current?.present()
    setIsOpen(true)
  }, [])
  const handleSheetChanges = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleCancelBottomSheet = () => bottomSheetModalRef.current?.dismiss()
  const handleChooseGallery = () => navigation.navigate('ChooseFromGallery')
  const handleTakePhoto = () => navigation.navigate('TakePhoto')
  const handleNavigateAddress = () => navigation.navigate('Address')

  const handleChangeBirthday = (e) => {
    setBirthdayError('')
    const getBirthday = (b) => {
      if (b.length > birthday.length) {
        if (b.length === 2 || b.length === 5) {
          return b + '-'
        }
        return b
      } else {
        if (b.length === 2 || b.length === 5) {
          return b.slice(0, -1)
        }
        return b
      }
    }
    setBirthday(getBirthday(e))
  }

  useEffect(() => {
    setFullName(user?.data?.data?.full_name || '')
    setBirthday(user?.data?.data?.date_of_birth || '')
  }, [user])

  const handleNavigateModifyPassword = () => {
    send(user?.data?.phone)
      .then((res) => {
        dispatch(
          setUserNavigatePage({
            phone: user?.data?.phone,
            // @ts-ignore
            otp_token: res.otp_token,
            navigate: 'ModifyPassword',
          }),
        )
        navigation.navigate('VerifyOTPInsideTab')
      })
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }
  const handleNavigateModifyEmail = () => {
    send(user?.data?.phone)
      .then((res) => {
        dispatch(
          setUserNavigatePage({
            phone: user?.data?.phone,
            email: user?.data?.email,
            // @ts-ignore
            otp_token: res.otp_token,
            navigate: 'ModifyEmail',
          }),
        )
        navigation.navigate('VerifyOTPInsideTab')
      })
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }

  if (isLoading || addressLoading) {
    return <LoadingIndicator />
  } else {
    return (
      <View style={styles.container}>
        {(sendMessageLoading || updateLoading) && <OverlayIndicator />}
        <Dialog
          title={dialogTitle}
          content={dialogContent}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleClose={handleClose}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.flex, {opacity: isOpen ? 0.2 : 1}]}
        >
          <Pressable onPress={() => (isOpen ? bottomSheetModalRef?.current?.dismiss() : {})}>
            <View style={styles.informationView}>
              <View style={styles.wrapAvatar}>
                <Image source={{uri: anonymousAvatar}} style={styles.avatar} />
                <TouchableOpacity onPress={handleChangeAvatar} style={styles.buttonCamera}>
                  <Image
                    resizeMode="contain"
                    source={{uri: cameraIcon}}
                    style={styles.iconCamera}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonView}>
              <DefaultInput
                icon={personalIcon}
                error={fullNameError}
                editable={!isOpen}
                onChange={handleChangeName}
                placeholder="PersonalInformation.placeholder.name"
                value={fullName}
              />
              <DefaultInput
                icon={birthIcon}
                editable={!isOpen}
                error={birthdayError}
                onChange={handleChangeBirthday}
                placeholder="PersonalInformation.placeholder.birthday"
                value={birthday}
                keyboardType="phone-pad"
              />

              <View style={styles.button}>
                <View style={styles.buttonData}>
                  <Image resizeMode="contain" source={{uri: phoneIcon}} style={styles.buttonIcon} />
                  <TextInput
                    editable={false}
                    value={user?.data?.data?.phone || ''}
                    style={[styles.buttonText, styles.phone]}
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonData}>
                  <Image source={{uri: emailIcon}} resizeMode="contain" style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{user?.data?.data.email || ''}</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={{uri: navigationIcon}}
                  style={styles.buttonIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={handleNavigateAddress} style={styles.button}>
                <View style={styles.buttonData}>
                  <Image resizeMode="contain" source={{uri: mapIcon}} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>{address?.data?.data?.address}</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={{uri: navigationIcon}}
                  style={styles.buttonIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <View style={styles.buttonData}>
                  <Image resizeMode="contain" source={{uri: lockIcon}} style={styles.buttonIcon} />
                  <Text style={styles.buttonText}>********</Text>
                </View>
                <Image
                  resizeMode="contain"
                  source={{uri: navigationIcon}}
                  style={styles.buttonIcon}
                />
              </TouchableOpacity>

              <DefaultButton
                buttonName={'PersonalInformation.button-verify'}
                onClick={handleVerify}
              />
            </View>
          </Pressable>
        </ScrollView>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={[200, 360]}
            onDismiss={handleSheetChanges}
          >
            <View style={styles.panel}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>{t('PersonalInformation.sheet-title')}</Text>
                <Text style={styles.panelSubtitle}>{t('PersonalInformation.sheet-caption')}</Text>
              </View>
              <TouchableOpacity onPress={handleTakePhoto} style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>
                  {t('PersonalInformation.sheet-taking-photo')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleChooseGallery} style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>
                  {t('PersonalInformation.sheet-pick-photo')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancelBottomSheet} style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>{t('PersonalInformation.sheet-cancel')}</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    )
  }
}

export default PersonalInformation
