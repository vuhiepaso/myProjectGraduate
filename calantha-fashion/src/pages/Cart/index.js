import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'

import {decreaseProduct, getCarts, increaseProduct, removeCart} from '../../api/cartApi'
import {DefaultLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {setNavigateCheckout} from '../../redux/action/billAction'
import {handleError} from '../../utils/middleware'
import ListCart from './section/ListCart'

function Cart({navigation}) {
  const dispatch = useDispatch()
  const [removeLoadingId, setRemoveLoadingId] = useState('')
  const [increaseLoadingId, setIncreaseLoadingId] = useState('')
  const [decreaseLoadingId, setDecreaseLoadingId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {data: carts, isLoading, refetch} = getCarts()
  const {mutateAsync: remove, isLoading: removeLoading} = removeCart()
  const {mutateAsync: increase, isLoading: increaseLoading} = increaseProduct()
  const {mutateAsync: decrease, isLoading: decreaseLoading} = decreaseProduct()

  const handleRemoveCart = (cart_id) => {
    setRemoveLoadingId(cart_id)
    remove(cart_id)
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => refetch())
  }

  const handleIncreaseProduct = (cart_id) => {
    setIncreaseLoadingId(cart_id)
    increase(cart_id)
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => refetch())
  }

  const handleDecreaseProduct = (cart_id) => {
    setDecreaseLoadingId(cart_id)
    decrease(cart_id)
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
      .finally(() => refetch())
  }

  const handleNavigateCheckout = () => {
    const total = carts?.data?.data?.reduce((a, c) => {
      return a + (c.price * c.quantity * (100 - c.sale_off)) / 100
    }, 0)
    const bill = {
      bill: carts?.data?.data,
      total,
    }
    dispatch(setNavigateCheckout(bill))
    navigation.navigate('Checkout')
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
      <ListCart
        carts={carts?.data?.data || []}
        removeLoadingId={removeLoadingId}
        decreaseLoadingId={decreaseLoadingId}
        increaseLoadingId={increaseLoadingId}
        onRemoveCart={handleRemoveCart}
        removeLoading={removeLoading}
        increaseLoading={increaseLoading}
        decreaseLoading={decreaseLoading}
        onIncreaseProduct={handleIncreaseProduct}
        onDecreaseProduct={handleDecreaseProduct}
        onNavigateCheckout={handleNavigateCheckout}
      />
    </DefaultLayout>
  )
}

export default Cart
