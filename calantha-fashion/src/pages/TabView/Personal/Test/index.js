import React, {useCallback, useRef, useMemo, useState} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import BottomSheet, {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import {TouchableOpacity} from 'react-native-gesture-handler'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  // ref
  const bottomSheetModalRef = useRef(null)

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index)
    index === 1 ? setIsOpen(true) : setIsOpen(false)
  }, [])

  const handleCancelBottomSheet = () => {
    bottomSheetModalRef.current?.dismiss()
  }
  const handleChooseLibrary = () => {}
  const handleTakePhoto = () => {}

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={[styles.container, {opacity: isOpen ? 0.2 : 1}]}>
        <Text>
          The new APIs in react-native-reanimated@2 use React Native APIs that are incompatible with
          Remote JS Debugging. Consequently, you can only debug apps using these APIs using Flipper,
          which is not yet available in the Expo managed workflow. You will be unable to use Remote
          JS Debugging if you use the new APIs from Reanimated 2. Remote JS Debugging will continue
          to work if you only use the APIs that were also available in Reanimated 1.
        </Text>
        <Button onPress={handlePresentModalPress} title="Present Modal" color="black" />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.panelTitle}>Upload Photo</Text>
              <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity onPress={handleTakePhoto} style={styles.panelButton}>
              <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleChooseLibrary} style={styles.panelButton}>
              <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancelBottomSheet} style={styles.panelButton}>
              <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default App
