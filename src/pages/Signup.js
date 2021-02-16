import SignupForm from 'components/Form/SignupForm/SignupForm'
import { useSelector } from 'react-redux'
import { selectUser } from 'features/userSlice'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'

const SignupFormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

const Signup = () => {
  const user = useSelector(selectUser)

  return (
    <>
      {!user.isLogged ? (
        <SignupFormWrapper>
          <SignupForm />
        </SignupFormWrapper>
      ) : (
        <Redirect to='/' />
      )}
    </>
  )
}

export default Signup
