import React, {memo} from 'react'
import {Image, View} from 'react-native'

import styles from '../../../assets/styles/pages/ProductStyles'

function ProductImage({image}) {
  return (
    <View style={styles.imageView}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
        resizeMode="stretch"
      />
    </View>
  )
}

export default memo(ProductImage)
