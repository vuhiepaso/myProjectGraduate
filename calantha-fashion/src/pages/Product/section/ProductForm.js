import React from 'react'
import {View} from 'react-native'

import styles from '../../../assets/styles/pages/ProductStyles'

function ProductForm({children}) {
  return (
    <View style={styles.dataView}>
      <View style={styles.contentView}>{children}</View>
    </View>
  )
}

export default ProductForm
