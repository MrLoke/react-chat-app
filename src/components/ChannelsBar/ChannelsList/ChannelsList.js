import { useEffect, useState } from 'react'
import UserProfile from 'components/ChannelsBar/UserProfile/UserProfile'
import Channel from 'components/ChannelsBar/Channel/Channel'
import AddChannelModal from 'components/ChannelsBar/AddChannelModal/AddChannelModal'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from 'features/channelSlice'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { db } from 'firebase-config'
import {
  MobileIcon,
  MobileChannelsBarWrapper,
  ChannelsListContainer,
  AddChannel,
  AddChannelText,
} from './ChannelsListStyled'
import { useHistory } from 'react-router-dom'

const ChannelsList = () => {
  const [isChannelsOpen, setIsChannelsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addChannelName, setAddChannelName] = useState('')
  const [channels, setChannels] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    const unsubscribe = db.collection('channels').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    })
    return () => unsubscribe()
  }, [])

  const handleAddChannel = () => {
    if (addChannelName.length > 0) {
      db.collection('channels').add({
        channelName: addChannelName,
      })
    } else return
    closeModal()
    setAddChannelName('')
    dispatch(
      setChannelInfo({
        channelName: addChannelName,
      })
    )
    history.push(`/channel/${addChannelName}`)
  }

  return (
    <>
      {/* -----------------MOBILE SECTION----------------- */}
      <MobileIcon>
        <AiOutlineMenu
          color='#fff'
          size='2.5rem'
          onClick={() => setIsChannelsOpen(!isChannelsOpen)}
        />
      </MobileIcon>
      <MobileChannelsBarWrapper isChannelsOpen={isChannelsOpen}>
        <UserProfile />
        <AddChannel>
          <AddChannelText>Create channel</AddChannelText>
          <IoIosAddCircleOutline color='#fff' size='3rem' onClick={openModal} />
        </AddChannel>
        <AddChannelModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addChannelName={addChannelName}
          setAddChannelName={setAddChannelName}
          handleAddChannel={handleAddChannel}
        />
        {channels.map(({ id, channel }) => (
          <Channel
            key={id}
            id={id}
            channelName={channel.channelName}
            setIsChannelsOpen={setIsChannelsOpen}
          />
        ))}
      </MobileChannelsBarWrapper>
      {/* -----------------END MOBILE SECTION----------------- */}

      <ChannelsListContainer>
        <UserProfile />
        <AddChannel>
          <AddChannelText>Create channel</AddChannelText>
          <IoIosAddCircleOutline
            color='#fff'
            size='3rem'
            style={{ cursor: 'pointer' }}
            onClick={openModal}
          />
        </AddChannel>
        <AddChannelModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          addChannelName={addChannelName}
          setAddChannelName={setAddChannelName}
          handleAddChannel={handleAddChannel}
        />
        {channels.length === 0 ? (
          <LoadingSpinner />
        ) : (
          channels.map(({ id, channel }) => (
            <Channel
              key={id}
              id={id}
              channelName={channel.channelName}
              setIsChannelsOpen={setIsChannelsOpen}
            />
          ))
        )}
      </ChannelsListContainer>
    </>
  )
}

export default ChannelsList
