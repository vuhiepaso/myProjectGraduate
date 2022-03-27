import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'

import {checkProductExist, getOrderBills, removeBill} from '../../api/orderApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {setNavigateProduct} from '../../redux/action/productAction'
import {handleError} from '../../utils/middleware'
import {isEmpty} from '../../utils/validate'
import ListOrder from './section/ListOrder'

function Order({navigation}) {
  const dispatch = useDispatch()
  const [loadingProductId, setLoadingProductId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {data: orders, isLoading, refetch} = getOrderBills()
  const {mutateAsync: check, isLoading: checkLoading} = checkProductExist()
  const {mutateAsync: remove, isLoading: removeLoading} = removeBill()

  const handleNavigateProduct = (product_id, product_name) => {
    setLoadingProductId(product_id)
    check(product_id)
      .then((res) => {
        if (res?.data || isEmpty(res.data.data)) {
          setModalVisible(true)
          setDialogTitle('404')
          setDialogContent('Product not found')
        } else {
          dispatch(setNavigateProduct({product_id, product_name}))
          navigation.navigate('DashboardStack', {screen: 'Product'})
        }
      })
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }

  const handleRemoveBill = (bill_id, product_id) => {
    setLoadingProductId(product_id)
    remove(bill_id)
      .then(() => refetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }

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
      <ScrollLayout>
        <ListOrder
          leftLoading={checkLoading}
          loadingProductId={loadingProductId}
          onNavigateProduct={handleNavigateProduct}
          orders={orders?.data?.data || []}
          rightLoading={removeLoading}
          onRemoveBill={handleRemoveBill}
        />
      </ScrollLayout>
    </DefaultLayout>
  )
}

export default Order
