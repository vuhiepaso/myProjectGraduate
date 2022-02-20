import React, {memo} from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

import {primaryColor, whiteColor} from '../../../assets/styles'
import styles from '../../../assets/styles/view/GetStarted'

function Adapter(props) {
  const {images, position, onSwitch, buttonName} = props
  return (
    <View style={styles.switchView}>
      <View style={styles.dotView}>
        {images.map((image, index) => (
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
      <TouchableOpacity style={styles.switchButton} onPress={onSwitch}>
        <Text style={styles.textClick}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default memo(Adapter)
