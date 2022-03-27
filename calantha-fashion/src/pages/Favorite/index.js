import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import {LoadingIndicator} from '../../component/loading'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import FavoriteList from './section/FavoriteList'
import {addToFavorite, getFavoriteProduct, removeToFavorite} from '../../api/favoriteApi'
import {setNavigateProduct} from '../../redux/action/productAction'
import {handleError} from '../../utils/middleware'
import {Dialog} from '../../component/view'
import {pagination} from '../../themes/default'

export default function Favorite({navigation}) {
  const dispatch = useDispatch()
  const [times, setTimes] = useState(1)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [productLoadingId, setProductLoadingId] = useState('')

  const {data: favorites, isLoading, refetch} = getFavoriteProduct(times * pagination)
  const {mutateAsync: addFavorite, isLoading: addFavoriteLoading} = addToFavorite()
  const {mutateAsync: removeFavorite, isLoading: removeFavoriteLoading} = removeToFavorite()

  useEffect(() => {
    refetch()
  }, [times])

  const handleNavigateProduct = (product_id, product_name) => {
    dispatch(setNavigateProduct({product_id, product_name}))
    navigation.push('Dashboard', {
      screen: 'DashboardStack',
      params: {
        screen: 'Product',
      },
    })
  }
  const handleAddToFavorite = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore,
    addFavorite({product_id})
      .then(() => refetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleRemoveToFavorite = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore
    removeFavorite({product_id})
      .then(() => refetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  if (isLoading) {
    return <LoadingIndicator />
  }
  return (
    <DefaultLayout statusBarStyle="dark-content">
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        handleClose={handleCloseDialog}
        setModalVisible={setModalVisible}
      />
      <FavoriteList
        onSetTimes={setTimes}
        addFavorite={handleAddToFavorite}
        removeFavorite={handleRemoveToFavorite}
        productLoadingId={productLoadingId}
        favoriteLoading={addFavoriteLoading || removeFavoriteLoading}
        onNavigateProduct={handleNavigateProduct}
        favorites={favorites?.data?.data || []}
      />
    </DefaultLayout>
  )
}
