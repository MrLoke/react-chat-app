import ChannelsList from 'components/ChannelsBar/ChannelsList/ChannelsList'
import UsersList from 'components/UsersBar/UsersList/UsersList'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'
import styled from 'styled-components/macro'

const AppWrapper = styled.div`
  display: flex;
`

const HomeChatWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  ${({ theme }) => theme.media.md} {
    width: 60%;
  }
`

const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`

const HomeHeaderText = styled.h2`
  padding: 10px 0;
`

const Home = () => {
  const user = useSelector(selectUser)

  return (
    <>
      {user.isLogged ? (
        <AppWrapper>
          <ChannelsList />
          <HomeChatWrapper>
            <HomeHeader>
              <HomeHeaderText>Welcome to chat!</HomeHeaderText>
              <HomeHeaderText>Explore channels or create your own channel</HomeHeaderText>
            </HomeHeader>
          </HomeChatWrapper>
          <UsersList />
        </AppWrapper>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  )
}

export default Home
