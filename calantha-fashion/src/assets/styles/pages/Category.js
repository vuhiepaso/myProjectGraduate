import {StyleSheet, Dimensions} from 'react-native'
import {backgroundColor, component, textBold} from '../index'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  container: {
    ...component.flex,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  scrollView: {
    width: width,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 24,
  },
  categoryView: {
    height: width * 0.4,
    maxHeight: 200,
    marginTop: width * 0.04,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  category: {
    ...component.flex,
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
    maxHeight: 160,
    maxWidth: 140,
    borderRadius: 10,
  },
})
