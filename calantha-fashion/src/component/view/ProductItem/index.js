import React, {memo} from 'react'
import {View, Text, Image, TouchableOpacity, Pressable, ActivityIndicator} from 'react-native'
import {heartIcon, fillHeartIcon, cartBoldIcon} from '../../../assets/images'
import {useTranslation} from 'react-i18next'

import styles from './styles'
import {convertMoney} from '../../../config'

function ProductItem({
  discount,
  uri,
  rootPrice,
  discountPrice,
  name,
  favorite,
  favoriteLoading,
  cartLoading,
  onNavigateProduct,
  addCart,
  removeFavorite,
  addFavorite,
}) {
  const {t} = useTranslation()
  return (
    <View style={styles.itemView}>
      <View style={styles.header}>
        <View style={styles.discount}>
          <Text style={styles.discountText}>{discount}%</Text>
        </View>
        <TouchableOpacity onPress={favorite ? removeFavorite : addFavorite} style={styles.iconView}>
          {favoriteLoading ? (
            <ActivityIndicator color="#000000" />
          ) : (
            <Image
              style={[styles.icon, favorite ? styles.favorite : styles.normal]}
              source={{uri: favorite ? fillHeartIcon : heartIcon}}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Pressable onPress={onNavigateProduct}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={{uri: uri}} />
          </View>
          <View style={styles.descriptionView}>
            <Text numberOfLines={1} style={styles.price}>
              <Text style={styles.discountPrice}>{convertMoney(discountPrice)}đ</Text>
              <View style={styles.divideView} />
              <Text style={styles.rootPrice}>{convertMoney(rootPrice)}đ</Text>
            </Text>
            <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
              {name}
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.divide} />
      {cartLoading ? (
        <View style={styles.pay}>
          <ActivityIndicator color="#FFFFFF" />
        </View>
      ) : (
        <View>
          <TouchableOpacity onPress={addCart} style={styles.pay}>
            <Image style={[styles.icon, styles.addIcon]} source={{uri: cartBoldIcon}} />
            <Text style={styles.payText}>{t('Add-to-cart')}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default memo(ProductItem)
