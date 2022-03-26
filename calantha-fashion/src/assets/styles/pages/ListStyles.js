import {Dimensions, StyleSheet} from 'react-native'

const {height} = Dimensions.get('screen')

export default StyleSheet.create({
  item: {
    width: '100%',
  },
  list: {
    height: height - 220,
    paddingTop: 16,
  },
  wrap: {
    justifyContent: 'space-evenly',
  },
})
