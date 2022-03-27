import React, {useCallback, useState} from 'react'
import {addAddress} from '../../api/addAddressApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {OverlayIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {handleError} from '../../utils/middleware'
import AddAddressForm from './section/AddAddressForm'

function AddAddress({navigation}) {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [address, setAddress] = useState('')
  const [addressError, setAddressError] = useState('')
  const [switchEnabled, setSwitchEnabled] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogContent, setDialogContent] = useState('')

  const {mutateAsync: addNewAddress, isLoading} = addAddress()

  const handleChangeName = (e) => {
    setNameError('')
    setName(e)
  }
  const handleChangePhone = (e) => {
    setPhoneError('')
    setPhone(e)
  }
  const handleChangeAddress = (e) => {
    setAddressError('')
    setAddress(e)
  }
  const handleCloseDialog = useCallback(() => {
    setModalVisible(false)
    setDialogTitle('')
    setDialogContent('')
  }, [])

  const handleAddAddress = () =>
    // @ts-ignore
    addNewAddress({recipient_name: name, phone, address, is_default: switchEnabled ? 1 : 0})
      .then(() => navigation.push('Address'))
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))

  return (
    <DefaultLayout statusBarStyle="dark-content">
      <Dialog
        title={dialogTitle}
        content={dialogContent}
        modalVisible={modalVisible}
        handleClose={handleCloseDialog}
        setModalVisible={setModalVisible}
      />
      {isLoading && <OverlayIndicator />}
      <ScrollLayout>
        <AddAddressForm
          nameError={nameError}
          onChangeName={handleChangeName}
          phoneError={phoneError}
          onChangePhone={handleChangePhone}
          addressError={addressError}
          onChangeAddress={handleChangeAddress}
          switchEnabled={switchEnabled}
          setSwitchEnabled={setSwitchEnabled}
          onAddAddress={handleAddAddress}
        />
      </ScrollLayout>
    </DefaultLayout>
  )
}

export default AddAddress
