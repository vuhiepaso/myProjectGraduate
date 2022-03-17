import React, {useCallback} from 'react'
import {View} from 'react-native'
import {ProductItem} from '../../../component/view'

import styles from '../../../assets/styles/pages/ListStyles'

function ProductList({
  products,
  productLoadingId,
  onNavigateProduct,
  addFavorite,
  addCart,
  removeFavorite,
  favoriteLoading,
  cartLoading,
}) {
  return (
    <View style={styles.item}>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          discount={product.sale_off}
          uri={product.image}
          rootPrice={product.price}
          discountPrice={(product.price * (100 - product.sale_off)) / 100}
          name={product.product_name}
          favorite={product.favorite}
          onNavigateProduct={useCallback(
            () => onNavigateProduct(product.product_id, product.product_name),
            [],
          )}
          cartLoading={productLoadingId === product.product_id ? cartLoading : false}
          favoriteLoading={productLoadingId === product.product_id ? favoriteLoading : false}
          addFavorite={useCallback(() => addFavorite(product.product_id), [])}
          addCart={useCallback(() => addCart(product.product_id), [])}
          removeFavorite={useCallback(() => removeFavorite(product.product_id), [])}
        />
      ))}
    </View>
  )
}

export default ProductList
