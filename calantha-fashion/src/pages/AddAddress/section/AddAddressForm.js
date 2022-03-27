import React from 'react'
import { locationIcon, personalIcon, phoneIcon } from '../../../assets/images'
import { DefaultButton, DefaultInput, SwitchButton, Note } from '../../../component/view'

function AddAddressForm({
  nameError,
  onChangeName,
  phoneError,
  onChangePhone,
  addressError,
  onChangeAddress,
  switchEnabled,
  setSwitchEnabled,
  onAddAddress,
}) {
  return (
    <>
      <DefaultInput
        error={nameError}
        icon={personalIcon}
        onChange={onChangeName}
        placeholder="AddAddress.placeholder.name"
      />
      <Note note="AddAddress.note" />
      <DefaultInput
        error={phoneError}
        icon={phoneIcon}
        onChange={onChangePhone}
        placeholder="AddAddress.placeholder.phone"
        keyboardType="phone-pad"
      />
      <DefaultInput
        error={addressError}
        icon={locationIcon}
        onChange={onChangeAddress}
        placeholder="AddAddress.placeholder.address"
      />
      <SwitchButton
        label="AddAddress.switch-button"
        switchEnabled={switchEnabled}
        setSwitchEnabled={setSwitchEnabled}
      />
      <DefaultButton buttonName="AddAddress.button-name" onClick={onAddAddress} />
    </>
  )
}

export default AddAddressForm
