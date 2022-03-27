import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {Image, Text, View, Animated} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {locationIcon, phoneIcon} from '../../../assets/images'

import DeleteAndEdit from './DeleteAndEdit'
import styles from './styles'

function AddressItem({address, onRemoveAddress, removeLoading, onEditAddress}) {
  const {t} = useTranslation()
  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 118],
      outputRange: [0.45, 0],
    })
    return (
      <Animated.View style={{transform: [{scale}]}}>
        <DeleteAndEdit
          key={address.address_id}
          onRemoveAddress={onRemoveAddress}
          loading={removeLoading}
          onEditAddress={onEditAddress}
        />
      </Animated.View>
    )
  }

  return (
    <View style={styles.contentView}>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
              {address.recipient_name}
            </Text>
            <View style={styles.row}>
              <Image source={{uri: phoneIcon}} style={styles.icon} />
              <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                {address.phone}
              </Text>
            </View>
            <View style={styles.row}>
              <Image source={{uri: locationIcon}} style={styles.icon} />
              <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
                {address.address}
              </Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <View>
              {address.is_default === 1 && (
                <Text style={styles.defaultText}>[{t('Address.default')}]</Text>
              )}
            </View>
            <Image source={{uri: locationIcon}} style={styles.locationIcon} />
          </View>
        </View>
      </Swipeable>
    </View>
  )
}

export default memo(AddressItem)
