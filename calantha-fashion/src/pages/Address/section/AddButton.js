import React from 'react'
import {useTranslation} from 'react-i18next'
import {TouchableOpacity, Text, Image, View} from 'react-native'
import {addIcon} from '../../../assets/images'

import styles from '../../../assets/styles/pages/AddressStyles.js'

function AddButton({buttonName, onClick}) {
  const {t} = useTranslation()
  return (
    <TouchableOpacity onPress={onClick} style={styles.addButton}>
      <View style={styles.buttonTextContainer}>
        <Image source={{uri: addIcon}} style={styles.icon} />
        <Text style={styles.buttonText}>{t(buttonName)}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AddButton
