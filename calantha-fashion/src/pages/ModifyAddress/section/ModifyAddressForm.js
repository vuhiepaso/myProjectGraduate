import React from 'react'
import {ScrollView} from 'react-native'
import {locationIcon, personalIcon, phoneIcon} from '../../../assets/images'
import {DefaultButton, DefaultInput, SwitchButton, Note} from '../../../component/view'
import styles from '../../../assets/styles/pages/AddressStyles'

function ModifyAddressForm({
  name,
  nameError,
  onChangeName,
  phone,
  phoneError,
  onChangePhone,
  address,
  addressError,
  onChangeAddress,
  switchEnabled,
  setSwitchEnabled,
  onAddAddress,
}) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <DefaultInput
        error={nameError}
        icon={personalIcon}
        onChange={onChangeName}
        placeholder="AddAddress.placeholder.name"
        value={name}
      />
      <Note note="ModifyAddress.note" />
      <DefaultInput
        error={phoneError}
        icon={phoneIcon}
        onChange={onChangePhone}
        placeholder="AddAddress.placeholder.phone"
        keyboardType="phone-pad"
        value={phone}
      />
      <DefaultInput
        error={addressError}
        icon={locationIcon}
        onChange={onChangeAddress}
        placeholder="AddAddress.placeholder.address"
        value={address}
      />
      <SwitchButton
        label="AddAddress.switch-button"
        switchEnabled={switchEnabled}
        setSwitchEnabled={setSwitchEnabled}
      />
      <DefaultButton buttonName="AddAddress.button-name" onClick={onAddAddress} />
    </ScrollView>
  )
}

export default ModifyAddressForm
