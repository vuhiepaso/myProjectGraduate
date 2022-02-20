import React, { memo } from 'react'
import PagerView from 'react-native-pager-view'
import { View, ImageBackground } from 'react-native'

import styles from '../../../assets/styles/view/GetStarted'

function Background(props) {
  const { images, pagerRef, setPosition } = props
  return (
    <PagerView
      ref={pagerRef}
      onPageSelected={(e) => {
        setPosition(e.nativeEvent.position)
      }}
      style={styles.pagerView}
      initialPage={0}
    >
      {images &&
        images.map((image, index) => (
          <View key={index}>
            <ImageBackground
              style={styles.image}
              source={{
                uri: image.uri,
              }}
            />
          </View>
        ))}
    </PagerView>
  )
}

export default memo(Background)
