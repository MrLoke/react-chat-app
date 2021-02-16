import {
  UserContainer,
  UserAvatar,
  UserName,
} from './UserInfoStyled'

const UserInfo = ({ user }) => {
  return (
    <UserContainer>
      <UserAvatar src={user.photoURL} alt='' />
      <UserName>{user.displayName}</UserName>
    </UserContainer>
  )
}

export default UserInfo
