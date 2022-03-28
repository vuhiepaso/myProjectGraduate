import {ImageManipulator} from 'expo-image-crop'
import {useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native'

const CameraPreview = ({photo, retakePicture, savePhoto}) => {
  const onToggleModal = () => {
    setIsvisible(!isVisible)
  }

  const [uri, setUri] = useState(photo.uri || photo)
  const [isVisible, setIsvisible] = useState(false)
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <ImageBackground
        source={{uri: uri}}
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            padding: 15,
            paddingBottom: 55,
            justifyContent: 'flex-end',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <TouchableOpacity
              onPress={retakePicture}
              style={{
                width: 80,
                height: 40,

                alignItems: 'center',
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}
              >
                Re-take
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => savePhoto(uri)}
              style={{
                width: 130,
                height: 40,

                alignItems: 'center',
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}
              >
                choose photo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsvisible(true)}
              style={{
                width: 55,
                height: 40,
                alignItems: 'center',
                borderRadius: 4,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                }}
              >
                crop
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ImageManipulator
          photo={{uri: uri}}
          isVisible={isVisible}
          onPictureChoosed={({uri: uriM}) => setUri(uriM)}
          onToggleModal={onToggleModal}
        />
      </ImageBackground>
    </View>
  )
}

export default CameraPreview
