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
    <View>
      {categories.map((category, index) => (
        <Pressable style={styles.pressable} key={index}>
          <Text>{category.category_name}</Text>
          <Image source={{uri: category.image}} style={{width: 100, height: 100}} />
        </Pressable>
      ))}
    </View>
  )
}
export default memo(ItemCategory)
