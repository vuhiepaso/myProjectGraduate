import React, { useCallback, useState } from 'react'
import { View, TextInput, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import {
    anonymousAvatar,
    phoneIcon,
    personalIcon,
    navigationIcon,
    emailIcon,
    cameraIcon,
    birthIcon,
    mapIcon,
    lookIcon,
    lockIcon,
} from '../../../../assets/images'
import styles from '../../../../assets/styles/pages/PersonalInfomation'
import { DefaultButton, DefaultInput, Dialog } from '../../../../component/view'
import { useQuery } from 'react-query'
import client from '../../../../config/axios'
import { handleError } from '../../../../utils/middleware'
import { LoadingIndicator } from '../../../../component/loading'

export default function PersonalInformation({ navigation }) {
    const { t } = useTranslation()

    const [fullName, setFullName] = useState("")
    const [birthday, setBirthday] = useState('')

    const [modalVisible, setModalVisible] = useState(false)
    const [dialogTitle, setDialogTitle] = useState('')
    const [dialogContent, setDialogContent] = useState('')
    const [user, setUser] = useState({
        full_name: "",
        date_of_bird: "",
        email: "",
        phone: "",
    });
    const handleClose = useCallback(() => {
        setModalVisible(false)
        setDialogTitle('')
        setDialogContent('')
    }, [])
    const handleVerify = () => {

    }
    const handleChangeName = () => {

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

    const { isLoading } = useQuery('user-information', () => client.get('/user/information'), {
        onError: (e) => handleError(e, setModalVisible, setDialogTitle, setDialogContent),
        onSuccess: (res) => setUser(res?.data?.data || {}),
    })

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
                        <View style={styles.wrapAvatar}>
                            <Image
                                source={{
                                    uri: anonymousAvatar,
                                }}
                                style={styles.avatar}
                            />
                            <TouchableOpacity style={styles.buttonCamera}>
                                <Image
                                    resizeMode="contain"
                                    source={{ uri: cameraIcon }}
                                    style={styles.iconCamera}
                                />
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
                            placeholder={user.full_name}
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
                            placeholder={user.date_of_bird}
                            value={birthday}
                            keyboardType="phone-pad"
                        />

                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonData}>
                                <Image source={{ uri: emailIcon }} resizeMode="contain" style={styles.buttonIcon} />
                                <Text style={styles.buttonText}>{user.email || ""}</Text>
                            </View>
                            <Image
                                resizeMode="contain"
                                source={{ uri: navigationIcon }}
                                style={styles.buttonIcon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonData}>
                                <Image
                                    resizeMode="contain"
                                    source={{ uri: phoneIcon }}
                                    style={styles.buttonIcon}
                                />
                                <Text style={styles.buttonText}>{user.phone || ""}</Text>
                            </View>
                            <Image
                                resizeMode="contain"
                                source={{ uri: navigationIcon }}
                                style={styles.buttonIcon}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonData}>
                                <Image resizeMode="contain"
                                    source={{ uri: mapIcon }}
                                    style={styles.buttonIcon}
                                />
                                <Text style={styles.buttonText}></Text>
                            </View>
                            <Image
                                resizeMode="contain"
                                source={{ uri: navigationIcon }}
                                style={styles.buttonIcon}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <View style={styles.buttonData}>
                                <Image
                                    resizeMode="contain"
                                    source={{ uri: lockIcon }}
                                    style={styles.buttonIcon}
                                />
                                <Text style={styles.buttonText}>********</Text>
                            </View>
                            <Image
                                resizeMode="contain"
                                source={{ uri: navigationIcon }}
                                style={styles.buttonIcon}
                            />
                        </TouchableOpacity>

                        <DefaultButton
                            buttonName={'Personal.PersonalInformation.Button-verify'}
                            onClick={handleVerify}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

}
