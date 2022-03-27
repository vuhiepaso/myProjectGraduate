import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import {convertMoney} from '../../../config'

import styles from './styles'

function PurchaseItem({
  status,
  purchase,
  leftLoading,
  leftButtonTitle,
  leftButtonColor,
  onLeftButtonClick,
  rightLoading,
  rightButtonTitle,
  rightButtonColor,
  onRightButtonClick,
}) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(status)}</Text>
      <View style={styles.divider} />
      <View style={styles.contentContainer}>
        <Image source={{uri: purchase.image}} style={styles.image} />
        <View style={styles.productContainer}>
          <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
            {purchase.product_name}
          </Text>
          <Text style={styles.productInformation} numberOfLines={1} ellipsizeMode="tail">
            Quantity: {purchase.quantity} | {convertMoney(purchase.price)} đ
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftContainer}>
          <TouchableOpacity
            onPress={onLeftButtonClick}
            style={[styles.button, {borderColor: leftButtonColor}]}
          >
            {leftLoading ? (
              <ActivityIndicator color={leftButtonColor} />
            ) : (
              <Text style={{color: leftButtonColor}}>{t(leftButtonTitle)}</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={onRightButtonClick}
            style={[styles.button, {borderColor: rightButtonColor}]}
          >
            {rightLoading ? (
              <ActivityIndicator color={rightButtonColor} />
            ) : (
              <Text style={{color: rightButtonColor}}>{t(rightButtonTitle)}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default memo(PurchaseItem)
