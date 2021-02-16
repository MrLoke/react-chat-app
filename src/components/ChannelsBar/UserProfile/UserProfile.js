import { useHistory } from 'react-router-dom'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { IoLogOutOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from 'features/userSlice'
import {
  UserProfileContainer,
  CurrentUserProfile,
  UserAvatar,
  UserName,
  UserAction,
  UserActionText,
} from './UserProfileStyled'

const UserProfile = () => {
  const history = useHistory()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <UserProfileContainer>
      <CurrentUserProfile>
        {user.isLogged ? (
          <>
          <UserAvatar
            src={user.userInfo.photoURL}
            alt={`${user.userInfo.displayName} avatar`}
            />
            <UserName>{user.userInfo.displayName}</UserName>
          </>
        ) : <LoadingSpinner />}
      </CurrentUserProfile>
      <UserAction
        onClick={() => {
          dispatch(logout())
          history.push('/login')
        }}>
        <IoLogOutOutline size='2rem' color='#fff' />
        <UserActionText>Logout</UserActionText>
      </UserAction>
    </UserProfileContainer>
  )
}

export default UserProfile
