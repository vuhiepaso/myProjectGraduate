import {StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    width: width,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 24,
  },
  category: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    maxHeight: 200,
    height: width * 0.4,
    marginTop: width * 0.04,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  categoryImage: {
    width: width * 0.28,
    height: width * 0.32,
    maxHeight: 160,
    maxWidth: 140,
    borderRadius: 10,
  },
})
