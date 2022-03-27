import React, {memo} from 'react'
import {ActivityIndicator, Image, TouchableOpacity, Text, View, Animated} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import styles from './styles'
import Delete from './Delete'
import {convertMoney} from '../../../config'
import {useTranslation} from 'react-i18next'
import {addIcon, minusIcon} from '../../../assets/images'

function CartItem({
  cart,
  removeLoading,
  onRemoveCart,
  onIncreaseProduct,
  increaseLoading,
  onDecreaseProduct,
  decreaseLoading,
}) {
  const {t} = useTranslation()

  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 124],
      outputRange: [0.58, 0],
    })
    return (
      <Animated.View style={{transform: [{scale}]}}>
        <Delete key={cart.cart_id} onRemoveCart={onRemoveCart} loading={removeLoading} />
      </Animated.View>
    )
  }

  return (
    <View style={styles.contentView}>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Image style={styles.image} source={{uri: cart.image}} />
            <View style={styles.data}>
              <Text style={styles.name} numberOfLines={1}>
                {cart.product_name}
              </Text>
              <Text numberOfLines={1} style={styles.price}>
                {convertMoney(Math.floor((cart.price * (100 - cart.sale_off)) / 100))} x{' '}
                {cart.quantity}
              </Text>
              <Text style={styles.remain} numberOfLines={1}>
                {`${t('Cart.remain')} ${convertMoney(cart.import_quantity - cart.sold_quantity)}`}
              </Text>
              <Text style={styles.total} numberOfLines={1}>
                {`${t('Cart.total')} ${convertMoney(
                  Math.floor((cart.price * cart.quantity * (100 - cart.sale_off)) / 100),
                )} đ`}
              </Text>
            </View>
          </View>
          <View style={styles.rightContent}>
            <View style={styles.buttonQuantity}>
              {decreaseLoading ? (
                <ActivityIndicator color="#000000" />
              ) : (
                <TouchableOpacity
                  style={styles.modifyQuantity}
                  onPress={cart.quantity > 0 ? onDecreaseProduct : () => {}}
                >
                  <Image style={styles.modifyIcon} source={{uri: minusIcon}} />
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.quantity}>
              <Text style={styles.quantityText}>{cart.quantity}</Text>
            </View>
            <View style={styles.buttonQuantity}>
              {increaseLoading ? (
                <ActivityIndicator color="#000000" />
              ) : (
                <TouchableOpacity
                  style={styles.modifyQuantity}
                  onPress={
                    cart.quantity < cart.import_quantity - cart.sold_quantity
                      ? onIncreaseProduct
                      : () => {}
                  }
                >
                  <Image style={styles.modifyIcon} source={{uri: addIcon}} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  )
}

export default memo(CartItem)
