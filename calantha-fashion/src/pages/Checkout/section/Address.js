import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { locationIcon, phoneIcon } from '../../../assets/images'

import styles from '../../../assets/styles/pages/CheckoutStyles'

function Address({ address, onNavigateAddress }) {
  const { t } = useTranslation()
  return (
    <View style={styles.contentView}>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {address.recipient_name}
          </Text>
          <View style={styles.row}>
            <Image source={{ uri: phoneIcon }} style={styles.icon} />
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {address.phone}
            </Text>
          </View>
          <View style={styles.row}>
            <Image source={{ uri: locationIcon }} style={styles.icon} />
            <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
              {address.address}
            </Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onNavigateAddress}>
            <Text style={styles.defaultText}>[{t('Checkout.change-address')}]</Text>
          </TouchableOpacity>
          <Image source={{ uri: locationIcon }} style={styles.locationIcon} />
        </View>
      </View>
    </View>
  )
}

export default Address
