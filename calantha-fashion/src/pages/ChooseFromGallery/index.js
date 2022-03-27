import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
import CameraPreview from '../../component/view/CameraPreview'
import * as MediaLibrary from 'expo-media-library'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null)
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    async function handleLaunchImagePicture() {
      const {status} = await MediaLibrary.requestPermissionsAsync()
      setHasPermission(status === 'granted')
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })
      console.log(result)
      if (!result.cancelled) {
        // @ts-ignore
        setImage(result.uri)
      }
    }
    handleLaunchImagePicture()
  }, [])
  const choosePhoto = async (uri) => {
    const newPhoto = await FileSystem.readAsStringAsync(uri, {encoding: 'base64'})
    console.log('data:image/png;base64,' + newPhoto)
  }

  const retakePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log('result:' + result)

    if (!result.cancelled) {
      // @ts-ignore
      setImage(result.uri)
    }
  }

  if (!hasPermission) {
    return <></>
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {image && (
        <CameraPreview photo={image} savePhoto={choosePhoto} retakePicture={retakePicture} />
      )}
    </View>
  )
}

// {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

// <ImageBackground source={{ uri: image }} style={{ width: 200, height: 200 }} />

// <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
