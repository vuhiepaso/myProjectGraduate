import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text, Pressable, TouchableOpacity} from 'react-native'
import {blackColor, greyColor, whiteColor} from '../../../assets/styles'

import styles from '../../../assets/styles/pages/ProductStyles'
import {convertMoney} from '../../../config'

function ProductContent({
  product,
  handleColor,
  showDescription,
  sizes,
  remain,
  handleSize,
  selectedColor,
  selectedSize,
  setShowDescription,
}) {
  const {t} = useTranslation()

  return (
    <View style={styles.content}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {product?.product_name}
      </Text>
      <View style={styles.price}>
        <Text style={styles.discountPrice}>
          {convertMoney((product?.price * (100 - product?.sale_off)) / 100)} đ
        </Text>
        <Text style={styles.rootPrice}>{convertMoney(product?.price)} đ</Text>
      </View>
      <Text style={styles.remain}>{`${t('Product.Remain')} ${remain}`}</Text>
      <View>
        <Text style={styles.description} numberOfLines={showDescription ? 10 : 1}>
          {product.description}
        </Text>
        {product?.description?.length > 50 && (
          <Pressable
            onPress={() => (showDescription ? setShowDescription(false) : setShowDescription(true))}
          >
            <Text style={styles.more}>{t(showDescription ? 'Product.hide' : 'Product.more')}</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.productContainer}>
        <View style={styles.product}>
          {product.color_table &&
            product.color_table.map((color, index) => (
              <TouchableOpacity
                onPress={() => handleColor(color.color_id)}
                key={index}
                style={[
                  styles.selectedColor,
                  {
                    borderColor: selectedColor === color.color_id ? blackColor : greyColor,
                    backgroundColor: color.color,
                  },
                ]}
              />
            ))}
        </View>
        <View style={styles.sizeContainer}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSize(size.size_id)}
              style={styles.sizeButton}
            >
              <Text
                style={[
                  styles.sizeText,
                  {borderColor: selectedSize === size.size_id ? blackColor : whiteColor},
                ]}
              >
                {size.size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

export default memo(ProductContent)
