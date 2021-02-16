import ChannelsList from 'components/ChannelsBar/ChannelsList/ChannelsList'
import ChatFeed from 'components/Chat/ChatFeed/ChatFeed'
import UsersList from 'components/UsersBar/UsersList/UsersList'
import styled from 'styled-components/macro'

const ChatWrapper = styled.div`
  display: flex;
`

const Chat = () => {

  return (
    <ChatWrapper>
      <ChannelsList />
      <ChatFeed />
      <UsersList />
    </ChatWrapper>
  )
}

export default Chat
