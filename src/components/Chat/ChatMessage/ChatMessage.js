import {
  ChatMessageWrapper,
  ChatMessageContainer,
  UserAvatar,
  UserFeedContainer,
  UserName,
  UserMessage,
  ImageMessage,
} from './ChatMessageStyled'

const ChatMessage = ({ user, msg }) => {
  return (
    <ChatMessageWrapper>
      <ChatMessageContainer>
        <UserAvatar src={user.photoURL} alt='' />
        <UserFeedContainer>
          <UserName>{user.displayName}</UserName>
          <UserMessage>{msg.message}</UserMessage>
          <UserMessage>
            {msg.images ? (
              <ImageMessage src={msg.images[0].url} alt='' />
            ) : null}
          </UserMessage>
        </UserFeedContainer>
      </ChatMessageContainer>
    </ChatMessageWrapper>
  )
}

export default ChatMessage
