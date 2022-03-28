import React from 'react'
import {View, ScrollView} from 'react-native'
import {CartItem, DefaultButton} from '../../../component/view'
import styles from '../../../assets/styles/pages/CartStyles'

function ListCart({
  carts,
  onRemoveCart,
  removeLoading,
  removeLoadingId,
  onIncreaseProduct,
  increaseLoadingId,
  increaseLoading,
  onDecreaseProduct,
  decreaseLoadingId,
  decreaseLoading,
  onNavigateCheckout,
}) {
  return (
    <ScrollView style={styles.container}>
      <View>
        {carts.map((cart, index) => (
          <CartItem
            key={index}
            cart={cart}
            onRemoveCart={() => onRemoveCart(cart.cart_id)}
            onIncreaseProduct={() => onIncreaseProduct(cart.cart_id)}
            onDecreaseProduct={() => onDecreaseProduct(cart.cart_id)}
            removeLoading={removeLoadingId === cart.cart_id ? removeLoading : false}
            increaseLoading={increaseLoadingId === cart.cart_id ? increaseLoading : false}
            decreaseLoading={decreaseLoadingId === cart.cart_id ? decreaseLoading : false}
          />
        ))}
        <View style={styles.checkout}>
          {carts.length > 0 && (
            <DefaultButton buttonName="Cart.checkout" onClick={onNavigateCheckout} />
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default ListCart
