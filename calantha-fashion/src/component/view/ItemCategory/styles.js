import {StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get('screen');
export default StyleSheet.create({
    category: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
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
  