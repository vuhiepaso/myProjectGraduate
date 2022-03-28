import React from 'react'
import {View} from 'react-native'
import {RadioButton} from '../../../component/view'
import styles from '../../../assets/styles/pages/CheckoutStyles'
import {Note} from '../../../component/view'

function PayMethod({payMethod, setPayMethod}) {
  return (
    <View style={styles.payMethodContainer}>
      <RadioButton
        onChoose={() => setPayMethod('momo')}
        autoFocus
        choose={payMethod === 'momo'}
        label={'Checkout.momo-label'}
      />
      <View style={styles.noteContainer}>
        <Note note={'Checkout.momo-caption'} />
      </View>
      <RadioButton
        onChoose={() => setPayMethod('direct')}
        choose={payMethod === 'direct'}
        label={'Checkout.direct-label'}
      />
    </View>
  )
}

export default PayMethod
