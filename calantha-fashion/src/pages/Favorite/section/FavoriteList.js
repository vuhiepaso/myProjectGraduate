import React, {useCallback} from 'react'
import {View, FlatList} from 'react-native'

import styles from '../../../assets/styles/pages/FavoriteStyles'
import {ProductItem} from '../../../component/view'

function FavoriteList({
  favorites,
  addFavorite,
  onNavigateProduct,
  removeFavorite,
  productLoadingId,
  favoriteLoading,
  onSetTimes,
}) {
  return (
    <View style={styles.item}>
      <FlatList
        onEndReached={() => onSetTimes((times) => times + 1)}
        style={styles.list}
        columnWrapperStyle={styles.wrap}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(favorite) => favorite.favorite_id}
        data={favorites}
        renderItem={({item, index}) => (
          <ProductItem
            key={index}
            discount={item.sale_off}
            uri={item.image}
            rootPrice={item.price}
            discountPrice={(item.price * (100 - item.sale_off)) / 100}
            name={item.product_name}
            favorite
            onNavigateProduct={() => onNavigateProduct(item.product_id, item.product_name)}
            favoriteLoading={productLoadingId === item.product_id ? favoriteLoading : false}
            addFavorite={() => addFavorite(item.product_id)}
            removeFavorite={() => removeFavorite(item.product_id)}
          />
        )}
      />
    </View>
  )
}

export default FavoriteList
