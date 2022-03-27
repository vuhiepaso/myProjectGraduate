import {StyleSheet, Dimensions} from 'react-native'
import {
  blackColor,
  buttonHeight,
  greyColor,
  greyTextColor,
  largeRadius,
  lightGreyTextColor,
  primaryTextColor,
  primaryTextSize,
  tinyRadius,
  titleTextSize,
  whiteColor,
} from '../index'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  // search
  searchContainer: {
    width: width - 48,
  },
  searchView: {
    width: '100%',
    backgroundColor: whiteColor,
    height: buttonHeight,
    borderRadius: largeRadius,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 32,
    marginBottom: 12,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: greyColor,
  },
  textInput: {
    flexGrow: 1,
    height: '100%',
    paddingLeft: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  searchIcon: {
    width: 24,
    height: 24,
    tintColor: greyColor,
  },
  // history
  history: {
    backgroundColor: whiteColor,
    padding: 16,
    borderRadius: tinyRadius,
  },
  historyView: {
    justifyContent: 'center',
  },
  historyTitle: {
    fontSize: titleTextSize,
    marginBottom: 12,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderColor: lightGreyTextColor,
    borderTopWidth: 1,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: greyTextColor,
  },
  searchText: {
    color: greyTextColor,
    fontSize: primaryTextSize,
  },
  xIcon: {
    width: 24,
    height: 24,
    tintColor: greyTextColor,
  },
  // suggest
  suggest: {
    backgroundColor: whiteColor,
    marginTop: 20,
    borderRadius: tinyRadius,
    padding: 12,
    marginVertical: 48,
  },
  suggestTitle: {
    fontSize: titleTextSize,
    marginBottom: 12,
  },
  suggestView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderColor: lightGreyTextColor,
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  suggestItem: {
    width: '50%',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: lightGreyTextColor,
    borderTopWidth: 1,
  },
  suggestName: {
    flex: 1,
    flexWrap: 'wrap',
    color: primaryTextColor,
    fontSize: primaryTextSize,
  },
  suggestImage: {
    width: 60,
    height: 72,
    borderRadius: tinyRadius,
  },
  // search
  item: {
    width: '100%',
  },
  list: {
    paddingTop: 16,
  },
  wrap: {
    justifyContent: 'space-evenly',
  },
})
