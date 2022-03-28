import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text} from 'react-native'

import styles from '../../../assets/styles/pages/CheckoutStyles'
import {convertMoney} from '../../../config'

function Payment({bills, total}) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      {bills.map((bill, index) => (
        <View key={index}>
          <View style={styles.paymentContainer}>
            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
              {bill.product_name}
            </Text>
            <Text style={styles.calculator} numberOfLines={1} ellipsizeMode="tail">
              {convertMoney(Math.floor((bill.price * (100 - bill.sale_off)) / 100))} x{' '}
              {bill.quantity} đ
            </Text>
            <Text style={styles.total} numberOfLines={1} ellipsizeMode="tail">
              {convertMoney(Math.floor((bill.price * bill.quantity * (100 - bill.sale_off)) / 100))}{' '}
              đ
            </Text>
          </View>
          <View style={styles.divider} />
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>{t('Checkout.total')}</Text>
        <Text style={styles.totalText}>{convertMoney(total)} đ</Text>
      </View>
    </View>
  )
}

export default Payment
