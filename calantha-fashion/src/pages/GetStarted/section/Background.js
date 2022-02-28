import React, {memo} from 'react'
import PagerView from 'react-native-pager-view'
import {ImageBackground} from 'react-native'

import styles from '../../../assets/styles/pages/GetStartedStyles'

function Background(props) {
  const {backgrounds, pagerRef, setPosition} = props
  return (
    <PagerView
      ref={pagerRef}
      onPageSelected={(e) => {
        setPosition(e.nativeEvent.position)
      }}
      style={styles.pagerView}
      initialPage={0}
    >
      {backgrounds &&
        backgrounds.map((image, index) => (
          <ImageBackground
            key={index}
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: image.uri,
            }}
          />
        ))}
    </PagerView>
  )
}

export default memo(Background)
