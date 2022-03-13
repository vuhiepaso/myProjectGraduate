import React, {memo} from 'react'
import PagerView from 'react-native-pager-view'
import {View, Image} from 'react-native'

import {primaryColor, whiteColor} from '../../../assets/styles'
import styles from '../../../assets/styles/pages/DashboardStyles'

function Slider({images, setPosition, position}) {
  return (
    <View style={styles.pagerView}>
      <PagerView
        onPageSelected={(e) => {
          setPosition(e.nativeEvent.position)
        }}
        style={styles.image}
        initialPage={0}
      >
        {images.map((item, index) => (
          <View key={index}>
            <Image style={styles.image} source={item} resizeMode="cover" />
          </View>
        ))}
      </PagerView>
      <View style={styles.dotView}>
        {images.map((data, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                width: index === position ? 18 : 8,
                backgroundColor: index === position ? primaryColor : whiteColor,
              },
            ]}
          />
        ))}
      </View>
    </View>
  )
}

export default memo(Slider)
