import { selectChannelName } from 'features/channelSlice'
import { useSelector } from 'react-redux'
import {
  ChatHeaderContainer,
  ChatHeaderName,
} from './ChatHeaderStyled'

const ChatHeader = () => {
  const channelName = useSelector(selectChannelName)

  return (
    <ChatHeaderContainer>
      <ChatHeaderName># {channelName}</ChatHeaderName>
    </ChatHeaderContainer>
  )
}

export default ChatHeader
