import React, {memo} from 'react'
import {Modal, Text, Pressable, View, Image} from 'react-native'
import {warningIcon} from '../../../assets/images'
import styles from './styles'

function Dialog({modalVisible, setModalVisible, title = '', content = '', handleClose}) {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Image source={{uri: warningIcon}} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={handleClose}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default memo(Dialog)
