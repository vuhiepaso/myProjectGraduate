import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {Image, View, Text, TouchableOpacity} from 'react-native'

import {backNavigationIcon, nextNavigationIcon} from '../../../assets/images'
import styles from '../../../assets/styles/pages/ProductStyles'
import {DefaultButton} from '../../../component/view'

function ProductAction({quantity, onAddQuantity, onMinusQuantity, onAddToCart}) {
  const {t} = useTranslation()
  return (
    <View style={styles.button}>
      <View style={styles.buttonQuantity}>
        <Text style={styles.quantityText}>{t('Product.Quantity')}</Text>
        <View style={styles.quantityView}>
          <TouchableOpacity style={styles.changeQuantity} onPress={onMinusQuantity}>
            <Image source={{uri: backNavigationIcon}} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.changeQuantity} onPress={onAddQuantity}>
            <Image source={{uri: nextNavigationIcon}} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <DefaultButton buttonName="Product.add-to-cart" onClick={onAddToCart} />
    </View>
  )
}

export default memo(ProductAction)
