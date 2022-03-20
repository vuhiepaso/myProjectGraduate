import React from 'react'
import {View, Text, ScrollView, Pressable, Image} from 'react-native'
import {useQuery} from 'react-query'

import styles from '../../assets/styles/pages/CategoryStyles'
import {LoadingIndicator} from '../../component/loading'
import client from '../../config/axios'

export default function Category() {
  const {data: category, isLoading: categoryLoading} = useQuery(
    'dashboard-category',
    () => client.get('/category/all'),
    {onError: (err) => console.log(err)},
  )

  if (categoryLoading) {
    return <LoadingIndicator />
  } else {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollView}>
            {category &&
              category?.data?.data.map((item, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles.categoryView,
                    {backgroundColor: item.background_color || '#FFE7E7'},
                  ]}
                >
                  <View style={styles.category}>
                    <Text style={[styles.categoryText, {color: item.text_color || 'red'}]}>
                      {item.category_name}
                    </Text>
                  </View>
                  <Image
                    style={styles.categoryImage}
                    source={{
                      uri: item.image,
                    }}
                    resizeMode="cover"
                  />
                </Pressable>
              ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
