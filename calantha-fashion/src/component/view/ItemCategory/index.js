import React, {memo} from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text, Image, ScrollView, Pressable} from 'react-native'
import styles from './styles'
function ItemCategory({categories}) {
  return (
    // <View style = {styles.category}>
    //     <Text style = {styles.categoryText}>{text}</Text>
    //     <Image source={{uri: img}}
    //         resizeMode = 'cover'
    //         style = {styles.categoryImage}
    //     />
    // </View>
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Pressable
          style={[styles.pressable, {backgroundColor: category.background_color}]}
          key={index}
        >
          <Text style={styles.categoryText}>{category.category_name}</Text>
          <Image source={{uri: category.image}} style={styles.categoryImage} />
        </Pressable>
      ))}
    </View>
  )
}
export default memo(ItemCategory)
