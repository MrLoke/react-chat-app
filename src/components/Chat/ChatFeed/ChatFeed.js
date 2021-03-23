import { useEffect, useState, useRef } from 'react'
import ChatHeader from 'components/Chat/ChatHeader/ChatHeader'
import ChatMessage from 'components/Chat/ChatMessage/ChatMessage'
import ChatInput from 'components/Chat/ChatInput/ChatInput'
import { selectChannelId, selectChannelName } from 'features/channelSlice'
import { selectUser } from 'features/userSlice'
import { useSelector } from 'react-redux'
import { db, storage } from 'firebase-config'
import firebase from 'firebase/app'
import {
  ChatFeedWrapper,
  ChatMessageWrapper,
  EmptyChannelContainer,
  EmptyChannelText,
} from './ChatFeedStyled'

const ChatFeed = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [file, setFile] = useState(null)
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const messagesContainer = useRef(null)

  const scrollToBottom = () => {
    messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  }

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom()
    }
  }, [messages])

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        )
    }
  }, [channelId])

  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const sendMessage = async (e) => {
    e.preventDefault()

    if (file !== null) {
      const storageRef = storage.ref()
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: input,
          user: user.userInfo,
          images: firebase.firestore.FieldValue.arrayUnion({
            name: file.name,
            url: await fileRef.getDownloadURL(),
          }),
        })
      setInput('')
      setFile(null)
    }

    if (input.length > 0 && file === null) {
      db.collection('channels').doc(channelId).collection('messages').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user.userInfo,
      })
      setInput('')
    } else return
  }

  return (
    <ChatFeedWrapper>
      <ChatHeader />
      <ChatMessageWrapper ref={messagesContainer}>
        {messages.length === 0 && (
          <EmptyChannelContainer>
            <EmptyChannelText>Lets type something!</EmptyChannelText>
          </EmptyChannelContainer>
        )}
        {messages.map((message, i) => (
          <ChatMessage key={i} msg={message} user={message.user} />
        ))}
      </ChatMessageWrapper>
      <ChatInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        channelName={channelName}
        onFileChange={onFileChange}
      />
    </ChatFeedWrapper>
  )
}

export default ChatFeed
