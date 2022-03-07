import React, { memo } from 'react'
import {useTranslation} from 'react-i18next'
import { View, Text, Image } from 'react-native'
import styles from './styles'
function ItemCategory({text, img}){
    const t = useTranslation()
    return(
        <View style = {styles.category}>
            <Text style = {styles.categoryText}>{text}</Text>
            <Image source={{uri: img}}
                resizeMode = 'cover'
                style = {styles.categoryImage}
            />
        </View>
    )
}
export default memo(ItemCategory)