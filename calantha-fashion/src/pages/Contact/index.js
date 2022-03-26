import React, {memo, useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import io from 'socket.io-client'

import {DefaultLayout} from '../../component/layout'
import {api} from '../../config/keys'

import ChatButton from './section/ChatButton'
import Message from './section/Message'
import {LoadingIndicator} from '../../component/loading'
import {getMessage} from '../../api/contactApi'

function Contact() {
  // @ts-ignore
  const contactStore = useSelector((state) => state.contact)
  const [listMessage, setListMessages] = useState([])
  const chatRef = useRef(null)
  const scrollRef = useRef(null)

  const {isLoading} = getMessage((e) => handleSetList(e))

  const handleSetList = (e) => {
    setListMessages(e?.data?.data)
    scrollRef?.current?.scrollToEnd()
  }

  // @ts-ignore
  const socket = io.connect(api)

  useEffect(() => socket.emit('join', {user_id: contactStore?.contact.user_id}), [])

  useEffect(() => {
    const handleReceiveMessage = async () => {
      await socket.on('receive_chat', ({data}) => setListMessages((list) => [...list, data]))
      scrollRef?.current?.scrollToEnd()
    }
    handleReceiveMessage()
  }, [socket])

  const sendMessage = (message, handleSended) => {
    if (message !== '') {
      handleSended()
      socket.emit('send_chat', {message, user_id: contactStore?.contact.user_id, role: 'user'})
    }
  }

  if (isLoading) {
    return <LoadingIndicator />
  }
  return (
    <DefaultLayout statusBarStyle="dark-content">
      <Message
        scrollRef={scrollRef}
        listMessages={listMessage}
        avatar={contactStore?.contact?.avatar}
      />
      <ChatButton chatRef={chatRef} sendMessage={sendMessage} />
    </DefaultLayout>
  )
}

export default memo(Contact)
