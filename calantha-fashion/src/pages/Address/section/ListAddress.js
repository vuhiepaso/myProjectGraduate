import React from 'react'
import {ScrollView} from 'react-native'

import styles from '../../../assets/styles/pages/AddressStyles'
import {AddressItem} from '../../../component/view'
import AddButton from './AddButton.js'

function ListAddress({
  addresses,
  onAddAddress,
  onModifyAddress,
  addressLoadingId,
  onRemoveAddress,
  removeLoading,
}) {
  return (
    <ScrollView style={styles.container}>
      {addresses.map((address, index) => (
        <AddressItem
          key={index}
          address={address}
          onRemoveAddress={() => onRemoveAddress(address.address_id)}
          removeLoading={addressLoadingId === address.address_id ? removeLoading : false}
          onEditAddress={() => onModifyAddress(address)}
        />
      ))}
      <AddButton onClick={onAddAddress} buttonName="Address.button-name" />
    </ScrollView>
  )
}

export default ListAddress
