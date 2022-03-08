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
            <ItemCategory
                category={category}
            />
        );
    }
}