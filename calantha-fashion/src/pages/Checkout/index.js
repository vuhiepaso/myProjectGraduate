import React, {useCallback, useState} from 'react'
import {Linking} from 'react-native'
import {useSelector} from 'react-redux'
import {addBill, getDefaultAddress} from '../../api/checkoutApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {LoadingIndicator, OverlayIndicator} from '../../component/loading'
import {DefaultButton, Dialog} from '../../component/view'
import {payUrl} from '../../themes/default'
import {handleError} from '../../utils/middleware'
import Address from './section/Address'
import Payment from './section/Payment'
import PayMethod from './section/PayMethod'

function Checkout({navigation}) {
  // @ts-ignore
  const billStore = useSelector((state) => state.bill)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')
  const [payMethod, setPayMethod] = useState('momo')

  const {data: defaultAddress, isLoading} = getDefaultAddress()
  const {mutateAsync: add, isLoading: addBillLoading} = addBill()

  const handleNavigateAddress = () => navigation.navigate('PersonalStack', {screen: 'Address'})

  const handleAddBill = async () => {
    if (payMethod === 'momo') {
      const support = Linking.canOpenURL(payUrl)
      if (support) await Linking.openURL(payUrl)
    }
    // @ts-ignore
    add({address_id: defaultAddress?.data?.data?.address_id, products: billStore?.bill})
      .then(() => navigation.push('Cart'))
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
      {addBillLoading && <OverlayIndicator />}
      <ScrollLayout>
        <Payment total={billStore?.total || 0} bills={billStore?.bill || []} />
        <Address
          onNavigateAddress={handleNavigateAddress}
          address={defaultAddress?.data?.data || {}}
        />
        <PayMethod payMethod={payMethod} setPayMethod={setPayMethod} />
        <DefaultButton buttonName="Checkout.button" onClick={handleAddBill} />
      </ScrollLayout>
    </DefaultLayout>
  )
}

export default Checkout
