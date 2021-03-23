import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import EditUserModal from 'components/EditUserModal/EditUserModal'
import { IoLogOutOutline } from 'react-icons/io5'
import { FiSettings } from 'react-icons/fi'
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
import { auth, db } from 'firebase-config'

const UserProfile = () => {
  const [isEditUserOpen, setIsEditUserOpen] = useState(false)
  const history = useHistory()
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const openEditUserModal = () => setIsEditUserOpen(true)
  const closeEditUserModal = () => setIsEditUserOpen(false)

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
        ) : (
          <LoadingSpinner />
        )}
      </CurrentUserProfile>
      <EditUserModal
        isEditUserOpen={isEditUserOpen}
        closeEditUserModal={closeEditUserModal}
      />
      <UserAction onClick={openEditUserModal}>
        <FiSettings size='1.8rem' color='#fff' />
        <UserActionText>Settings</UserActionText>
      </UserAction>
      <UserAction
        onClick={() => {
          db.collection('users')
            .doc(auth.currentUser.uid)
            .get()
            .then((doc) => doc.ref.update({ status: 'offline' }))
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
