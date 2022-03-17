import React, { memo } from 'react'
import { View, Text, Pressable, Image } from 'react-native'

import styles from './styles'

function CategoryItem({ onNavigateList, category }) {
  return (
    <Pressable
      onPress={onNavigateList}
      style={[styles.categoryView, { backgroundColor: category.background_color || '#FFE7E7' }]}
    >
      <View style={styles.category}>
        <Text style={[styles.categoryText, { color: category.text_color || '#FF4344' }]}>
          {category.category_name}
        </Text>
      </View>
      <Image
        style={styles.categoryImage}
        source={{
          uri: category.image,
        }}
        resizeMode="cover"
      />
    </Pressable>
  )
}

export default memo(CategoryItem)
