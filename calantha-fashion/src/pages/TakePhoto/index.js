import React, {useEffect, useRef, useState} from 'react'
import {View, TouchableOpacity, Image, StatusBar} from 'react-native'
import {Camera} from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import {
  backNavigationIcon,
  flashCameraIcon,
  noFlashCameraIcon,
  switchCameraIcon,
} from '../../assets/images'
import styles from '../../assets/styles/pages/TakePhotoStyle'
import CropImage from '../../component/view/CropImage'
import {useDispatch} from 'react-redux'
import {setUserAfterPreview} from '../../redux/action/userAction'

function TakePhoto({navigation}) {
  const cameraRef = useRef(null)
  const dispatch = useDispatch()
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off)
  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    async function handleRequestPermission() {
      const {status} = await Camera.requestCameraPermissionsAsync()
      const gallery = (await MediaLibrary.requestPermissionsAsync()).status
      setHasPermission(status === 'granted' && gallery === 'granted')
    }
    handleRequestPermission()
  }, [])

  const goBack = () => navigation.goBack()

  const handleTakingPhoto = async () => {
    const photo = await cameraRef?.current?.takePictureAsync()
    setCapturedImage(photo.uri)
    setPreviewVisible(true)
  }

  const handleSwitchFlashMode = () => {
    if (flashMode === Camera.Constants.FlashMode.on) {
      setFlashMode(Camera.Constants.FlashMode.off)
    } else if (flashMode === Camera.Constants.FlashMode.off) {
      setFlashMode(Camera.Constants.FlashMode.on)
    } else {
      setFlashMode(Camera.Constants.FlashMode.auto)
    }
  }

  const handleSetPhoto = (avatar) => {
    dispatch(setUserAfterPreview({avatar}))
    navigation.push('Dashboard', {
      screen: 'PersonalStack',
      params: {
        screen: 'PersonalInformation',
      },
    })
  }

  const handleNavigatePersonalInformation = () => setPreviewVisible(false)

  const handleSwitchCamera = () => {
    if (cameraType === Camera.Constants.Type.back) {
      setCameraType(Camera.Constants.Type.front)
    } else {
      setCameraType(Camera.Constants.Type.back)
    }
  }

  if (!hasPermission) {
    return <></>
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {previewVisible && capturedImage ? (
        <CropImage
          setPhoto={handleSetPhoto}
          photo={capturedImage}
          isVisible={previewVisible}
          onDone={handleNavigatePersonalInformation}
        />
      ) : (
        <Camera type={cameraType} flashMode={flashMode} style={styles.camera} ref={cameraRef}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <Image source={{uri: backNavigationIcon}} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity onPress={handleSwitchFlashMode}>
              <Image
                source={{
                  uri:
                    flashMode === Camera.Constants.FlashMode.on
                      ? flashCameraIcon
                      : noFlashCameraIcon,
                }}
                style={styles.flashIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleTakingPhoto}>
              <View style={styles.captureBorder}>
                <View style={styles.capture} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSwitchCamera}>
              <Image source={{uri: switchCameraIcon}} style={styles.switchIcon} />
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  )
}

export default TakePhoto
