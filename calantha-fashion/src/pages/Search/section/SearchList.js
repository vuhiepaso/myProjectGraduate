import React, {memo, useCallback, useEffect, useState} from 'react'
import {View, FlatList} from 'react-native'
import {ProductItem} from '../../../component/view'

import styles from '../../../assets/styles/pages/ListStyles'
import {LoadingIndicator} from '../../../component/loading'
import {addToFavorite, getSearches, removeToFavorite} from '../../../api/searchApi'
import {pagination} from '../../../themes/default'
import {handleError} from '../../../utils/middleware'

function SearchList({
  search,
  onNavigateProduct,
  setModalVisible,
  setDialogTitle,
  setDialogContent,
}) {
  const [productLoadingId, setProductLoadingId] = useState('')
  const [times, setTimes] = useState(1)
  const {
    data: searches,
    isLoading: searchesLoading,
    refetch: searchesRefetch,
    isFetching,
  } = getSearches(search, times * pagination)
  const {mutateAsync: addFavorite, isLoading: addFavoriteLoading} = addToFavorite()
  const {mutateAsync: removeFavorite, isLoading: removeFavoriteLoading} = removeToFavorite()

  useEffect(() => {
    searchesRefetch()
  }, [times])

  const handleAddToFavorite = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore,
    addFavorite({product_id})
      .then(() => searchesRefetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleRemoveToFavorite = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore
    removeFavorite({product_id})
      .then(() => searchesRefetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  return (
    <View style={[styles.item]}>
      {(searchesLoading || isFetching) && <LoadingIndicator />}
      <FlatList
        onEndReached={() => setTimes((times) => times + 1)}
        style={styles.list}
        columnWrapperStyle={styles.wrap}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={searches?.data || []}
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
            favoriteLoading={
              productLoadingId === item.product_id
                ? addFavoriteLoading || removeFavoriteLoading
                : false
            }
            addFavorite={() => handleAddToFavorite(item.product_id)}
            removeFavorite={() => handleRemoveToFavorite(item.product_id)}
          />
        )}
      />
    </View>
  )
}

export default memo(SearchList)
