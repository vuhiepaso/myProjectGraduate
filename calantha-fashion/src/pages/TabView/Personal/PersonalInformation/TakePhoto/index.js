import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import { ImageManipulator } from 'expo-image-crop'
import { flashCameraIcon, switchCameraIcon } from '../../../../../assets/images'
import { whiteColor } from '../../../../../assets/styles'
import CameraPreview from '../../../../../component/view/CameraPreview'
import Styles from '../../../../../assets/styles/pages/TakePhotoStyle'

export default function App() {
  const cameraRef = useRef(null)
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    async function handleRequestPermission() {
      const { status } = await Camera.requestCameraPermissionsAsync()
      const gallery = (await MediaLibrary.requestPermissionsAsync()).status
      setHasPermission(status === 'granted' && gallery === 'granted')
    }
    handleRequestPermission()
  }, [])

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    const gallery = (await MediaLibrary.requestPermissionsAsync()).status
    setHasPermission(status === 'granted' && gallery === 'granted')
  }
  const takePicture = async () => {
    const photo = await cameraRef?.current?.takePictureAsync()

    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  const choosePhoto = async (uri) => {
    const newPhoto = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    })
    console.log('data:image/png;base64,' + newPhoto)
  }

  const retakePicture = () => {
    setCapturedImage(null)
    setPreviewVisible(false)
    startCamera()
  }
  const handleFlashMode = () => {
    if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.off)
    } else if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on)
    } else {
      setFlashMode(Camera.Constants.FlashMode.auto)
    }
  }

  const switchCamera = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front)
    } else {
      setCameraType(Camera.Constants.Type.back)
    }
  }

  if (!hasPermission) {
    return null
  }
  return (
    <View style={Styles.container}>
      <View
        style={Styles.wrapStartCamera}
      >
        {previewVisible && capturedImage ? (
          <CameraPreview
            photo={capturedImage}
            savePhoto={choosePhoto}
            retakePicture={retakePicture}
          />
        ) : (
          <Camera
            type={cameraType}
            flashMode={flashMode}
            style={Styles.camera}
            ref={cameraRef}>
            <View
              style={Styles.containCamera}
            >
              <View
                style={Styles.containCamera2}
              >
                <TouchableOpacity
                  onPress={handleFlashMode}
                  style={[Styles.flashBtn,{backgroundColor: flashMode === Camera.Constants.FlashMode.off ? '#000' : '#fff'}]}
                >
                  <Image source={{ uri: flashCameraIcon }}
                    style={Styles.flashBtnImage} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={switchCamera}
                  style={Styles.switchCameraBtn}
                >
                  <Image source={{ uri: switchCameraIcon }}
                    style={Styles.switchCameraBtnImage} />
                </TouchableOpacity>
              </View>
              <View
                style={Styles.wrapTakePhoto}
              >
                <View
                  style={Styles.wrapTakePhoto2}
                >
                  {/* nút tròn chụp ảnh */}
                  <TouchableOpacity
                    onPress={takePicture}
                    style={Styles.takePhotoBtn}
                  />
                </View>
              </View>
            </View>
          </Camera>
        )}
      </View>
    </View>
  )
}


