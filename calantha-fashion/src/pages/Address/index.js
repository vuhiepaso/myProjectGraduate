import React, {useCallback, useState} from 'react'
import {useDispatch} from 'react-redux'

import {DefaultLayout} from '../../component/layout'
import {LoadingIndicator} from '../../component/loading'
import {getAddresses, removeAddress} from '../../api/addressApi'
import ListAddress from './section/ListAddress'
import {handleError} from '../../utils/middleware'
import {Dialog} from '../../component/view'
import {setUpdateAddress} from '../../redux/action/addressAction'

function Address({navigation}) {
  const dispatch = useDispatch()
  const [addressLoadingId, setAddressLoadingId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {data: addresses, isLoading, refetch} = getAddresses()
  const {mutateAsync: remove, isLoading: removeLoading} = removeAddress()

  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const handleRemoveAddress = (address_id) => {
    setAddressLoadingId(address_id)
    remove(address_id)
      .then(() => refetch())
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
  }

  const handleNavigateAddAddress = () => navigation.push('AddAddress')

  const handleNavigateModifyAddress = (a) => {
    const {address_id, address, phone, recipient_name, is_default} = a
    dispatch(setUpdateAddress({address_id, address, phone, recipient_name, is_default}))
    navigation.push('ModifyAddress')
  }

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
      <ListAddress
        removeLoading={removeLoading}
        onRemoveAddress={handleRemoveAddress}
        addressLoadingId={addressLoadingId}
        onAddAddress={handleNavigateAddAddress}
        onModifyAddress={handleNavigateModifyAddress}
        addresses={addresses?.data?.data || []}
      />
    </DefaultLayout>
  )
}

export default Address
