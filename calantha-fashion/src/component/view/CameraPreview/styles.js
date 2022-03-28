import {StyleSheet, Dimensions} from 'react-native'
import {largeTextSize, whiteColor} from '../../../assets/styles'

const {width} = Dimensions.get('screen')

export default StyleSheet.create({
  previewContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
  },
  preview: {
    flex: 1,
    flexDirection: 'column',
    padding: 16,
    paddingBottom: 56,
    justifyContent: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  retakeContainer: {
    width: 80,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: whiteColor,
    fontSize: largeTextSize,
  },
  pickPhotoButton: {
    width: 128,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
  },
  cropButton: {
    width: 56,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
  },
})
