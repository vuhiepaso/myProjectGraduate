import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

import styles from '../../../assets/styles/pages/GetStartedStyles'
import {DefaultButton} from '../../../component/view'

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
      <DefaultButton buttonName={buttonName} onClick={onSwitch} />
    </View>
  )
}

export default Adapter
