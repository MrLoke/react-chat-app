import { useEffect, useState } from 'react'
import UserInfo from 'components/UsersBar/UserInfo/UserInfo'
import SearchUserInput from 'components/UsersBar/SearchUserInput/SearchUserInput'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { FiUsers } from 'react-icons/fi'
import { db } from 'firebase-config'
import {
  MobileIcon,
  MobileUsersBarWrapper,
  UsersListContainer,
  UserInfoHeader,
} from './UsersListStyled'

const UsersList = () => {
  const [isUsersListOpen, setIsUsersListOpen] = useState(false)
  const [users, setUsers] = useState([])
  const [searchingUser, setSearchingUser] = useState('')

  useEffect(() => {
    const unsubscribe = db
      .collection('users')
      .onSnapshot((snapshot) =>
        setUsers(snapshot.docs.map((doc) => doc.data()))
      )
    return () => unsubscribe()
  }, [])

  return (
    <>
      {/* -----------------MOBILE SECTION----------------- */}
      <MobileIcon onClick={() => setIsUsersListOpen(!isUsersListOpen)}>
        <FiUsers size='2.5rem' color='#fff' />
      </MobileIcon>

      <MobileUsersBarWrapper isUsersListOpen={isUsersListOpen}>
        <SearchUserInput />
        {users.length === 0 ? (
          <LoadingSpinner />
        ) : (
          users
            .filter((user) =>
              user.displayName.toLowerCase().includes(searchingUser)
            )
            .map((user, i) => (
              <UserInfo
                key={i}
                user={user}
              />
            ))
        )}
      </MobileUsersBarWrapper>
      {/* -----------------END MOBILE SECTION----------------- */}

      <UsersListContainer>
        <UserInfoHeader>Users list</UserInfoHeader>
        <SearchUserInput setSearchingUser={setSearchingUser} />
        {users.length === 0 ? (
          <LoadingSpinner />
        ) : (
          users
            .filter((user) =>
              user.displayName.toLowerCase().includes(searchingUser)
            )
            .map((user, i) => (
              <UserInfo
                key={i}
                user={user}
              />
            ))
        )}
      </UsersListContainer>
    </>
  )
}

export default UsersList
