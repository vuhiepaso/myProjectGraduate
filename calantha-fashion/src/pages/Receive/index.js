import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'

import {checkProductExist, getReceiveBills} from '../../api/receiveApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {setNavigateProduct} from '../../redux/action/productAction'
import {handleError} from '../../utils/middleware'
import ListReceive from './section/ListReceive'

function Receive({navigation}) {
  const dispatch = useDispatch()
  const [loadingProductId, setLoadingProductId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [side, setSide] = useState('')

  const {data: receives, isLoading} = getReceiveBills()
  const {mutateAsync: check, isLoading: checkLoading} = checkProductExist()

  const handleNavigateProduct = (product_id, product_name, side) => {
    setSide(side)
    setLoadingProductId(product_id)
    check(product_id)
      .then((res) => {
        if (res.data) {
          dispatch(setNavigateProduct({product_id, product_name}))
          navigation.navigate('DashboardStack', {screen: 'Product'})
        } else {
          setModalVisible(true)
          setDialogTitle('404')
          setDialogContent('Product not found')
        }
      })
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
        <ListReceive
          leftLoading={side === 'left' ? checkLoading : false}
          rightLoading={side === 'right' ? checkLoading : false}
          loadingProductId={loadingProductId}
          onNavigateProduct={handleNavigateProduct}
          receives={receives?.data?.data || []}
        />
      </ScrollLayout>
    </DefaultLayout>
  )
}

export default Receive
