import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system'
import CameraPreview from '../../../../../component/view/CameraPreview';

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
    useEffect(() => {
        async function handleLaunchImagePicture(params) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            console.log(result);

            if (!result.cancelled) {
                // @ts-ignore
                setImage(result.uri);
            }
        }

        handleLaunchImagePicture()

    }, [])
    const choosePhoto = async (uri) => {
        const newPhoto = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
        })
        console.log('data:image/png;base64,' + newPhoto)
    }

    const retakePicture = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log("dong 42"+result);

        if (!result.cancelled) {
            // @ts-ignore
            setImage(result.uri);
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
            {image == null ? (
                null
            ) : (
                <CameraPreview
                    photo={image}
                    savePhoto={choosePhoto}
                    retakePicture={retakePicture}
                />
                // <ImageBackground source={{ uri: image }} style={{ width: 200, height: 200 }} />
            )
                // <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            }
        </View>
    );
}
