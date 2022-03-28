import React from 'react'
import {ImageManipulator} from 'expo-image-crop'
import {Dimensions} from 'react-native'
import * as FileSystem from 'expo-file-system'

const {width} = Dimensions.get('screen')

function CropImage({photo, setPhoto, isVisible, onDone}) {
  return (
    <ImageManipulator
      photo={{uri: photo}}
      isVisible={isVisible}
      onPictureChoosed={async ({uri}) => {
        const image = await FileSystem.readAsStringAsync(uri, {
          encoding: 'base64',
        })
        setPhoto('data:image/png;base64,' + image)
      }}
      onToggleModal={onDone}
      fixedMask={{width: 0.6 * width, height: 0.6 * width}}
    />
  )
}

export default CropImage
