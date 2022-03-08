import React, { memo } from 'react'
import {useTranslation} from 'react-i18next'
import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import styles from './styles'
function ItemCategory({category}){
    return(
        // <View style = {styles.category}>
        //     <Text style = {styles.categoryText}>{text}</Text>
        //     <Image source={{uri: img}}
        //         resizeMode = 'cover'
        //         style = {styles.categoryImage}
        //     />
        // </View>
        <View style = {styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {category?.data.data.map((item, index) =>(
                        <Pressable style = {styles.pressable}
                            key={index}>
                            <Text>{item.category_name}</Text>
                            <Image source={{uri: item.Image}}/>
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
export default memo(ItemCategory)