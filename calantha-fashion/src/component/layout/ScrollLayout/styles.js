import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    paddingTop: 16,
    width: width - 48,
    paddingBottom: 48,
  },
})
