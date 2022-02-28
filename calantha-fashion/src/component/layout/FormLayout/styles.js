import { StyleSheet } from 'react-native'

import { backgroundColor, normalRadius, maxWidth } from '../../../assets/styles'

export default StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: backgroundColor,
    borderTopLeftRadius: normalRadius,
    borderTopRightRadius: normalRadius,
  },
  content: {
    width: '100%',
    padding: 24,
    maxWidth: maxWidth,
  },
})
