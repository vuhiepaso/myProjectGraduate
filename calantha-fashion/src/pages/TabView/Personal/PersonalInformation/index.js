import React, { useCallback, useState } from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

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
    emailIcon,
    googleIcon,
} from '../../../../assets/images'
import styles from '../../../../assets/styles/pages/Personal'
import { DefaultButton } from '../../../../component/view'

export default function PersonalInformation({ navigation }) {
    const { t } = useTranslation()
    const handleVerify = () => {

    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.flex}>
                <View style={styles.informationView}>
                    <Image
                        source={{
                            uri: anonymousAvatar,
                        }}
                        style={styles.avatar}
                    ></Image>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonData}>
                            <Image
                                resizeMode="contain"
                                source={{ uri: personalIcon }}
                                style={styles.buttonIcon}
                            />
                            <Text style={styles.buttonText}>Julia Nannatsu</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonData}>
                            <Image
                                resizeMode="contain"
                                source={{ uri: contactIcon }}
                                style={styles.buttonIcon}
                            />
                            <Text style={styles.buttonText}>28 - 02 - 1997</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonData}>
                            <Image source={{ uri: emailIcon }} resizeMode="contain" style={styles.buttonIcon} />
                            <Text style={styles.buttonText}>JuliaNannatsu@gmail.com</Text>
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
                            <Text style={styles.buttonText}>0961 - 187 - 214</Text>
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
                                source={{ uri: googleIcon }}
                                style={styles.buttonIcon}
                            />
                            <Text style={styles.buttonText}>Nhà số 3, Ngõ 193/100/20 </Text>
                        </View>
                        <Image
                            resizeMode="contain"
                            source={{ uri: navigationIcon }}
                            style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.buttonData}>
                            <Image resizeMode="contain" source={{ uri: logoutIcon }} style={styles.buttonIcon} />
                            <Text style={styles.buttonText}>********</Text>
                        </View>
                        <Image
                            resizeMode="contain"
                            source={{ uri: navigationIcon }}
                            style={styles.buttonIcon}
                        />
                    </TouchableOpacity>
                </View>
                <DefaultButton
                    buttonName={'Personal.PersonalInformation.Button-verify'}
                    onClick={handleVerify}
                />
            </ScrollView>
        </View>
    )

}
