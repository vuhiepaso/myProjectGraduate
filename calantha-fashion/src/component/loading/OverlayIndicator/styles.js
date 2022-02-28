import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    top: 0,
    backgroundColor: 'rgba(148, 148, 148, 0.3)',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
