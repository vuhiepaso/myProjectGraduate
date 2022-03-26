import React, {useCallback, useMemo, useRef, useState} from 'react'
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native'
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
} from '../../../../assets/images'
import styles from '../../../../assets/styles/pages/PersonalInfomation'
import {DefaultButton, DefaultInput, Dialog} from '../../../../component/view'
import {useQuery} from 'react-query'
import client from '../../../../config/axios'
import {handleError} from '../../../../utils/middleware'
import {LoadingIndicator} from '../../../../component/loading'

export default function PersonalInformation({navigation}) {
  const dispatch = useDispatch()
  const bottomSheetModalRef = useRef(null)
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  const [isOpen, setIsOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const handleClose = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])
  const handleVerify = () => {}
  const handleChangeName = () => {}
  const handleChangeAvatar = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index) => {
    index === 1 ? setIsOpen(true) : setIsOpen(false)
  }, [])

  const handleCancelBottomSheet = () => {
    bottomSheetModalRef.current?.dismiss()
  }
  const handleChooseLibrary = () => {}
  const handleTakePhoto = () => {
    navigation.navigate('TakePhoto')
  }
  const handleChangeBirthday = (e) => {
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

  const {data: user, isLoading} = useQuery(
    'user-information',
    () => client.get('/user/information'),
    {onError: (e) => handleError(e, setModalVisible, setDialogTitle, setDialogContent)},
  )

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.flex, {opacity: isOpen ? 0.2 : 1}]}
        >
          <View style={styles.informationView}>
            <View style={styles.wrapAvatar}>
              <Image
                source={{
                  uri: anonymousAvatar,
                }}
                style={styles.avatar}
              />
              <TouchableOpacity onPress={handleChangeAvatar} style={styles.buttonCamera}>
                <Image resizeMode="contain" source={{uri: cameraIcon}} style={styles.iconCamera} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView}>
            {/* <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonData}>
                                <Image
                                    resizeMode="contain"
                                    source={{ uri: personalIcon }}
                                    style={styles.buttonIcon}
                                />
                                <Text style={styles.buttonText}>{user.full_name || ""}</Text>
                            </View>
                        </TouchableOpacity> */}
            <DefaultInput
              icon={personalIcon}
              error=""
              onChange={handleChangeName}
              placeholder={user?.data?.data.full_name}
              value={fullName}
            />
            {/* <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonData}>
                                <Image
                                    resizeMode="contain"
                                    source={{ uri: birthIcon }}
                                    style={styles.buttonIcon}
                                />
                                <Text style={styles.buttonText}>{user.date_of_bird || ""}</Text>
                            </View>
                        </TouchableOpacity> */}
            <DefaultInput
              icon={birthIcon}
              error=""
              onChange={handleChangeBirthday}
              placeholder={user?.data?.data.date_of_bird}
              value={birthday}
              keyboardType="phone-pad"
            />

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

            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonData}>
                <Image resizeMode="contain" source={{uri: phoneIcon}} style={styles.buttonIcon} />
                <Text style={styles.buttonText}>{user?.data?.data?.phone || ''}</Text>
              </View>
              <Image
                resizeMode="contain"
                source={{uri: navigationIcon}}
                style={styles.buttonIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonData}>
                <Image resizeMode="contain" source={{uri: mapIcon}} style={styles.buttonIcon} />
                <Text style={styles.buttonText}></Text>
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
              buttonName={'Personal.PersonalInformation.Button-verify'}
              onClick={handleVerify}
            />
          </View>
        </ScrollView>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.panel}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
              </View>
              <TouchableOpacity onPress={handleTakePhoto} style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleChooseLibrary} style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancelBottomSheet} style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    )
  }
}
