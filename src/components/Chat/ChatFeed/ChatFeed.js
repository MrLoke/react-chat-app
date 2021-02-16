import { useEffect, useState } from 'react'
import ChatHeader from 'components/Chat/ChatHeader/ChatHeader'
import ChatMessage from 'components/Chat/ChatMessage/ChatMessage'
import ChatInput from 'components/Chat/ChatInput/ChatInput'
import { selectChannelId, selectChannelName } from 'features/channelSlice'
import { selectUser } from 'features/userSlice'
import { useSelector } from 'react-redux'
import { db } from 'firebase-config'
import firebase from 'firebase/app'
import {
  ChatFeedWrapper,
  ChatMessageWrapper,
  EmptyChannelContainer,
  EmptyChannelText,
} from './ChatFeedStyled'

const ChatFeed = () => {
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId)
  const channelName = useSelector(selectChannelName)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const unsubscribe = () => {
      if (channelId) {
        db.collection('channels')
          .doc(channelId)
          .collection('messages')
          .orderBy('timestamp', 'asc')
          .onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) => doc.data()))
          )
      }
    }
    unsubscribe()
    
    return () => unsubscribe()
  }, [channelId])

  const sendMessage = (e) => {
    e.preventDefault()
    if (input.length > 0) {
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
      <ChatMessageWrapper>
        {messages.length === 0 && (
          <EmptyChannelContainer>
            <EmptyChannelText>Lets type something!</EmptyChannelText>
          </EmptyChannelContainer>
        )}
        {messages.map((message, i) => (
          <ChatMessage key={i} message={message.message} user={message.user} />
        ))}
      </ChatMessageWrapper>
      <ChatInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        channelName={channelName}
      />
    </ChatFeedWrapper>
  )
}

export default ChatFeed
