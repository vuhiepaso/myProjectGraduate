import React, {memo} from 'react'
import {View, ScrollView} from 'react-native'

import {CategoryItem} from '../../../component/view'
import styles from '../../../assets/styles/pages/DashboardStyles'
import DashBoardTitle from './DashboardTitle'

function CategoryList({title, categories, onNavigateList, onNavigateCategory}) {
  return (
    <View style={styles.Categories}>
      <DashBoardTitle title={title} onNextPress={onNavigateCategory} />
      <View style={styles.scrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              onNavigateList={() => onNavigateList(category.category_id, category.category_name)}
            />
          ))}
          <View style={styles.categoryMargin} />
        </ScrollView>
      </View>
    </View>
  )
}

export default memo(CategoryList)
