import {
  ChatMessageWrapper,
  ChatMessageContainer,
  UserAvatar,
  UserFeedContainer,
  UserName,
  UserMessage,
} from './ChatMessageStyled'

const ChatMessage = ({ user, message }) => {
  return (
    <ChatMessageWrapper>
      <ChatMessageContainer>
        <UserAvatar src={user.photoURL} alt='' />
        <UserFeedContainer>
          <UserName>{user.displayName}</UserName>
          <UserMessage>{message}</UserMessage>
        </UserFeedContainer>
      </ChatMessageContainer>
    </ChatMessageWrapper>
  )
}

export default ChatMessage
