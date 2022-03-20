import React, {useCallback, useState} from 'react'

import {LoadingIndicator} from '../../component/loading'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {SearchBar, Dialog} from '../../component/view'
import {slider} from '../../themes/default'
import {
  addToCart,
  addToFavorite,
  getCategories,
  getProducts,
  removeToFavorite,
} from '../../api/dashboardApi'
import Slider from './section/Slider'
import CategoryList from './section/CategoryList'
import HotDealList from './section/HotDealList'
import {handleError} from '../../utils/middleware'
import {useDispatch} from 'react-redux'
import {setNavigateProduct} from '../../redux/action/productAction'
import {setNavigateList} from '../../redux/action/categoryAction'

function Dashboard({navigation}) {
  const dispatch = useDispatch()
  const [position, setPosition] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [productLoadingId, setProductLoadingId] = useState('')

  const {data: categories, isLoading: categoryLoading} = getCategories()
  const {data: products, isLoading: productLoading, refetch: productRefetch} = getProducts(6)
  const {mutateAsync: addFavorite, isLoading: addFavoriteLoading} = addToFavorite()
  const {mutateAsync: removeFavorite, isLoading: removeFavoriteLoading} = removeToFavorite()
  const {mutateAsync: addCart, isLoading: addCartLoading} = addToCart()

  const handleNavigateCategory = useCallback(() => navigation.navigate('Category'), [])
  const handleNavigateList = useCallback((category_id, category_name) => {
    dispatch(setNavigateList({category_id, category_name}))
    navigation.navigate('List')
  }, [])
  const handleNavigateSearch = useCallback(() => navigation.navigate('Search'), [])
  const onNavigateProduct = useCallback((product_id, product_name) => {
    dispatch(setNavigateProduct({product_id, product_name}))
    navigation.push('Product')
  }, [])

  const handleAddToFavorite = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore,
    addFavorite({product_id})
      .then(() => productRefetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleRemoveToFavorite = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore
    removeFavorite({product_id})
      .then(() => productRefetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleAddToCart = useCallback((product_id) => {
    setProductLoadingId(product_id)
    // @ts-ignore
    addCart({product_id})
      .then(() => productRefetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => setProductLoadingId(''))
  }, [])

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  if (productLoading || categoryLoading) {
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
        <SearchBar
          onSearch={handleNavigateSearch}
          onFilter={handleNavigateCategory}
          placeholder="Dashboard.search"
        />
        <Slider position={position} setPosition={setPosition} images={slider} />
        <CategoryList
          title="Dashboard.categories"
          onNavigateCategory={handleNavigateCategory}
          onNavigateList={handleNavigateList}
          categories={categories?.data?.data || []}
        />
        <HotDealList
          addFavorite={handleAddToFavorite}
          removeFavorite={handleRemoveToFavorite}
          addCart={handleAddToCart}
          onNavigateProduct={onNavigateProduct}
          onNavigateList={handleNavigateList}
          cartLoading={addCartLoading}
          favoriteLoading={addFavoriteLoading || removeFavoriteLoading}
          title="Dashboard.hot-deal"
          products={products?.data?.data || []}
          productLoadingId={productLoadingId}
        />
      </ScrollLayout>
    </DefaultLayout>
  )
}

export default Dashboard
