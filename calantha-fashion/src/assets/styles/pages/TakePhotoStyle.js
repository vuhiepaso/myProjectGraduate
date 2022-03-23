import { Dimensions, StyleSheet } from 'react-native'
import {
    backgroundColor,
} from '..'
import { whiteColor } from '..'
const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapStartCamera: {
        flex: 1,
        width: '100%'
    },
    camera: {
        flex: 1
    },
    containCamera: {
        flex: 1,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row'
    },
    containCamera2: {
        position: 'absolute',
        left: '5%',
        top: '10%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    flashBtn: {
        borderRadius: 50,
        height: 25,
        width: 25
    },
    flashBtnImage: {
        height: 25,
        width: 25,
        tintColor: '#f7d100'
    },
    switchCameraBtn: {
        marginTop: 20,
        borderRadius: 50,
        height: 25,
        width: 25
    },
    switchCameraBtnImage: {
        height: 25,
        width: 25,
        tintColor: whiteColor
    },
    wrapTakePhoto: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        padding: 70,
        justifyContent: 'space-between',
    },
    wrapTakePhoto2: {
        alignSelf: 'center',
        flex: 1,
        alignItems: 'center'
    },
    takePhotoBtn: {
        width: 70,
        height: 70,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
})
