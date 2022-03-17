import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {addToCart, addToFavorite, getListProduct, removeToFavorite} from '../../api/listApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {setNavigateProduct} from '../../redux/action/productAction'
import {handleError} from '../../utils/middleware'
import ProductList from './section/ProductList'

function List({navigation}) {
  // @ts-ignore
  const category = useSelector((state) => state.category)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [productLoadingId, setProductLoadingId] = useState('')

  const {data: products, isLoading, refetch} = getListProduct(category?.category?.category_id, 6)
  const {mutateAsync: addFavorite, isLoading: addFavoriteLoading} = addToFavorite()
  const {mutateAsync: removeFavorite, isLoading: removeFavoriteLoading} = removeToFavorite()
  const {mutateAsync: addCart, isLoading: addCartLoading} = addToCart()

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

  const handleAddToCart = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore
    addCart({product_id})
      .then(() => refetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  useEffect(() => navigation.setOptions({title: category?.category?.category_name || ''}), [])

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
      <ScrollLayout>
        <ProductList
          addCart={handleAddToCart}
          addFavorite={handleAddToFavorite}
          removeFavorite={handleRemoveToFavorite}
          productLoadingId={productLoadingId}
          cartLoading={addCartLoading}
          favoriteLoading={addFavoriteLoading || removeFavoriteLoading}
          onNavigateProduct={handleNavigateProduct}
          products={products?.data?.data || []}
        />
      </ScrollLayout>
    </DefaultLayout>
  )
}

export default List
