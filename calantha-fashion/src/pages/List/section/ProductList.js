import React from 'react'
import {View, FlatList} from 'react-native'
import {ProductItem} from '../../../component/view'

import styles from '../../../assets/styles/pages/ListStyles'
import {LoadingIndicator} from '../../../component/loading'
import {pagination} from '../../../themes/default'

function ProductList({
  products,
  productLoadingId,
  onNavigateProduct,
  onAddFavorite,
  onRemoveFavorite,
  favoriteLoading,
  onSetTimes,
  loading,
}) {
  return (
    <View style={[styles.item]}>
      {loading && <LoadingIndicator />}
      <FlatList
        onEndReached={() => (products.length > pagination ? onSetTimes((times) => times + 1) : {})}
        style={styles.list}
        columnWrapperStyle={styles.wrap}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        renderItem={({item, index}) => (
          <ProductItem
            key={index}
            discount={item.sale_off}
            uri={item.image}
            rootPrice={item.price}
            discountPrice={(item.price * (100 - item.sale_off)) / 100}
            name={item.product_name}
            favorite={item.favorite}
            onNavigateProduct={() => onNavigateProduct(item.product_id, item.product_name)}
            favoriteLoading={productLoadingId === item.product_id ? favoriteLoading : false}
            addFavorite={() => onAddFavorite(item.product_id)}
            removeFavorite={() => onRemoveFavorite(item.product_id)}
          />
        )}
      />
    </View>
  )
}

export default ProductList
