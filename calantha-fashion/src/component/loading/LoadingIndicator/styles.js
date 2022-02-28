import { StyleSheet, Dimensions } from 'react-native'
import { whiteColor } from '../../../assets/styles'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    top: 0,
    backgroundColor: whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
