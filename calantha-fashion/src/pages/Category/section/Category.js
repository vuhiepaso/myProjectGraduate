import React, {useEffect} from 'react'
import {View, FlatList, ScrollView, Pressable, Dimensions} from 'react-native'

import {useQuery} from 'react-query'
import client from '../../../config/axios'
import ItemCategory from '../../../component/view/ItemCategory'
import {LoadingIndicator} from '../../../component/loading'
import {DefaultLayout, ScrollLayout} from '../../../component/layout'
import AsyncStorage from '@react-native-async-storage/async-storage'

const {width} = Dimensions.get('screen')

export default function Category(props) {
  const {data: categories, isLoading: categoriesLoading} = useQuery(
    'dashboard-category',
    () => client.get('/category/all'),
    {onError: (err) => console.log(err)},
  )

  //   useEffect(() => {
  //     const handleAddToken = async () => {
  //       await AsyncStorage.setItem(
  //         'token',
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNzlhYmNiOGYtNmM4ZC00YzdjLWJkNDUtMDExY2M0MzA2ZWNlIiwicm9sZSI6ImFkbWluIiwiZGF0ZSI6IjIwMjItMDMtMTdUMTQ6NDA6NDEuMzg5WiIsImlhdCI6MTY0NzUyODA0MX0.kynRYsHAcuA9a_xp-YjrTXX6abiymxOFGhU0x_PxnK0',
  //       )
  //     }
  //     handleAddToken()
  //   })

  console.log(categories?.data?.data)

  if (categoriesLoading) {
    return <LoadingIndicator />
  }
  return (
    <DefaultLayout statusBarStyle="dark-content">
      <ScrollLayout>
        <ItemCategory categories={categories?.data?.data || []} />
      </ScrollLayout>
    </DefaultLayout>
  )
}
