import {
  UserContainer,
  User,
  UserAvatar,
  UserName,
  UserStatus,
} from './UserInfoStyled'

const UserInfo = ({ user }) => {
  return (
    <UserContainer>
      <UserAvatar src={user.photoURL} alt={`${user.displayName} avatar`} />
      <User>
        <UserName>{user.displayName}</UserName>
        <UserStatus status={user.status}>{user.status}</UserStatus>
      </User>
    </UserContainer>
  )
}

export default UserInfo
