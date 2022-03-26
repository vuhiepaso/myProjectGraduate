import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addToFavorite, getListProduct, removeToFavorite} from '../../api/listApi'
import {DefaultLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {setNavigateProduct} from '../../redux/action/productAction'
import {handleError} from '../../utils/middleware'
import ProductList from './section/ProductList'
import {pagination} from '../../themes/default'

function List({navigation}) {
  // @ts-ignore
  const category = useSelector((state) => state.category.category)
  const dispatch = useDispatch()
  const [times, setTimes] = useState(1)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [productLoadingId, setProductLoadingId] = useState('')

  const {
    data: products,
    isLoading,
    refetch,
    isFetching,
  } = getListProduct(category.category_id, times * pagination)
  const {mutateAsync: addFavorite, isLoading: addFavoriteLoading} = addToFavorite()
  const {mutateAsync: removeFavorite, isLoading: removeFavoriteLoading} = removeToFavorite()

  useEffect(() => navigation.setOptions({title: category?.category_name || ''}), [])
  useEffect(() => {
    refetch()
  }, [times])

  const handleNavigateProduct = (product_id, product_name) => {
    dispatch(setNavigateProduct({product_id, product_name}))
    navigation.push('Product')
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
      <ProductList
        onSetTimes={setTimes}
        onAddFavorite={handleAddToFavorite}
        onRemoveFavorite={handleRemoveToFavorite}
        productLoadingId={productLoadingId}
        favoriteLoading={addFavoriteLoading || removeFavoriteLoading}
        onNavigateProduct={handleNavigateProduct}
        products={products?.data || []}
        loading={isFetching}
      />
    </DefaultLayout>
  )
}

export default List
