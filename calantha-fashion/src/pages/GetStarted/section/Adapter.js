import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

import styles from '../../../assets/styles/pages/GetStartedStyles'

function Adapter(props) {
  const {images, position, onSwitch, buttonName, activeColor, inActiveColor} = props
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
                backgroundColor: index === position ? activeColor : inActiveColor,
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

export default Adapter
