import { useDispatch } from 'react-redux'
import { setChannelInfo } from 'features/channelSlice'
import { useHistory } from 'react-router-dom'
import {
  ChannelContainer,
  ChannelName,
} from './ChannelStyled'

const Channel = ({ id, channelName, setIsChannelsOpen }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSelectChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    )
    history.push(`/channel/${channelName}`)
    setIsChannelsOpen(false)
  }

  return (
    <ChannelContainer onClick={handleSelectChannel}>
      <ChannelName>
        <span>#&nbsp;</span>
        {channelName}
      </ChannelName>
    </ChannelContainer>
  )
}

export default Channel
