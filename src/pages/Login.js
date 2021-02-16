import LoginForm from 'components/Form/LoginForm/LoginForm'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'
import styled from 'styled-components/macro'

const LoginFormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

const Login = () => {
  const user = useSelector(selectUser)

  return (
    <>
      {!user.isLogged ? (
        <LoginFormWrapper>
          <LoginForm />
        </LoginFormWrapper>
      ) : (
        <Redirect to='/' />
      )}
    </>
  )
}

export default Login
