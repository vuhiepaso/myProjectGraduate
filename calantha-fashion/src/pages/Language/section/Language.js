import React from 'react'
import {DefaultButton} from '../../../component/view'
import {} from '../../../assets/images'
import { Button, Image, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
const Language = () =>{

    const Data = [
        {},
        {}
    ]

    return(
        
        <>
            <FlatList
                data={Data}
                renderItem = {({item}) => (
                    <Image source={{uri: ""}}/>
                )}
            />
        </>
    );
}   