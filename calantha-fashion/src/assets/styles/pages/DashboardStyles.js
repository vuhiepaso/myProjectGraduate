import { StyleSheet, Dimensions } from 'react-native'
import { primaryTextColor, textBold, titleTextSize } from '../index'

const { width } = Dimensions.get('screen')

export default StyleSheet.create({
  // slider
  pagerView: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  image: {
    borderRadius: 10,
    width: width - 48,
    height: (width - 48) * 0.6,
  },
  dotView: {
    position: 'absolute',
    bottom: (width - 48) * 0.04,
    flexDirection: 'row',
  },
  dot: {
    height: 8,
    margin: 3,
    borderRadius: 10,
  },
  // Category List
  Categories: {
    marginBottom: 24,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: titleTextSize,
    fontWeight: textBold,
    color: primaryTextColor,
  },
  nextIcon: {
    width: 24,
    height: 18,
    tintColor: primaryTextColor,
  },
  scrollView: {
    width: width,
    marginTop: 16,
  },
  categoryMargin: {
    width: width * 0.1,
  },
  // Hot Deal
  hotDeal: {
    marginBottom: 24,
  },
  item: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})
