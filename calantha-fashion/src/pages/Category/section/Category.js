import React from 'react'
import { View, FlatList, ScrollView, Pressable, Dimensions } from 'react-native'

import {useQuery} from 'react-query'
import client from '../../../config/axios'
import ItemCategory from '../../../component/view/ItemCategory'

const {width} = Dimensions.get('screen')

export default function Category(props){
    const {data: category, isLoading: categoryLoading} = useQuery(
        'dashboard-category',
        () => client.get('/category/all'),
        {
            onError: (err) => console.log(err),
        }
    )

    const Loading = categoryLoading
    if(Loading){
        return null
    }
    else{
        return(
            <View
                style = {{justifyContent: 'center',
                alignItems:'center'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        {category?.data.data.map((item, index) =>(
                            <Pressable
                            style = {{maxHeight: 200,
                            height: width * 0.4,
                            marginTop: width * 0.04,
                            borderRadius: 10,
                            justifyContent: 'space-between'}}
                                key={index}>
                                <ItemCategory
                                    text={item.category_name}
                                    img ={item.Image}
                                />
                            </Pressable>
                        ))}
                    </View>

                </ScrollView>
            </View>
        );
    }
}