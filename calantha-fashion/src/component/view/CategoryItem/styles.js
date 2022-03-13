import {StyleSheet, Dimensions} from 'react-native'
import {textBold, tinyRadius} from '../../../assets/styles'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  categoryView: {
    height: width * 0.4,
    maxHeight: 200,
    marginRight: width * 0.03,
    borderRadius: tinyRadius,
    justifyContent: 'space-between',
  },
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: textBold,
  },
  categoryImage: {
    width: width * 0.28,
    height: width * 0.32,
    maxHeight: 150,
    maxWidth: 140,
    borderRadius: tinyRadius,
  },
})
