import { StyleSheet } from 'react-native'

import {
    buttonHeight,
    largeRadius,
    primaryTextSize,
    redColor,
    tinyTextSize,
    whiteColor,
} from '../../../assets/styles'

export default StyleSheet.create({
    container: {
        width: '100%',
    },
    view: {
        display: 'flex',
        flexDirection: 'row',
        height: buttonHeight,
        width: '100%',
        marginBottom: 12,
        alignItems: 'center',
        borderRadius: largeRadius,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: whiteColor,
    },
    textInput: {
        paddingLeft: 12,
        height: buttonHeight,
        flexGrow: 1,
        fontSize: primaryTextSize,
    },
    helperText: {
        color: redColor,
        fontSize: tinyTextSize,
        marginTop: -8,
        paddingLeft: 12,
        marginBottom: 12,
    },
})
