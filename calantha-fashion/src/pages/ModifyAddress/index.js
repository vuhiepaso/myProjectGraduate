import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateAddress} from '../../api/modifyAddressApi'
import {DefaultLayout, ScrollLayout} from '../../component/layout'
import {OverlayIndicator} from '../../component/loading'
import {Dialog} from '../../component/view'
import {setClearAddress} from '../../redux/action/addressAction'
import {handleError} from '../../utils/middleware'
import ModifyAddressForm from './section/ModifyAddressForm'

function ModifyAddress({navigation}) {
  // @ts-ignore
  const addressStore = useSelector((state) => state.address)
  const dispatch = useDispatch()
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

  // @ts-ignore
  const {mutateAsync: update, isLoading} = updateAddress(addressStore?.address?.address_id)

  useEffect(() => {
    // @ts-ignore
    const {address, phone, recipient_name, is_default} = addressStore?.address
    setSwitchEnabled(is_default === 1)
    setPhone(phone)
    setName(recipient_name)
    setAddress(address)
  }, [])

  const handleAddAddress = () => {
    // @ts-ignore
    update({recipient_name: name, phone, address, is_default: switchEnabled ? 1 : 0})
      .then(() => {
        dispatch(setClearAddress())
        navigation.push('Address')
      })
      .catch((error) => handleError(error, setModalVisible, setDialogTitle, setDialogContent))
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
      {isLoading && <OverlayIndicator />}
      <ModifyAddressForm
        name={name}
        nameError={nameError}
        onChangeName={handleChangeName}
        phone={phone}
        phoneError={phoneError}
        onChangePhone={handleChangePhone}
        address={address}
        addressError={addressError}
        onChangeAddress={handleChangeAddress}
        switchEnabled={switchEnabled}
        setSwitchEnabled={setSwitchEnabled}
        onAddAddress={handleAddAddress}
      />
    </DefaultLayout>
  )
}

export default ModifyAddress
