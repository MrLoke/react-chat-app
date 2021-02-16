import { useState } from 'react'
import Input from 'components/Form/Input/Input'
import NavLinks from 'components/Form/NavLinks/NavLinks'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from 'features/userSlice'
import { auth } from 'firebase-config'
import {
  ForgotPassword,
  FormWrapper,
  TopContainer,
  HeaderText,
  SmallText,
  BackDrop,
  HeaderContainer,
  Form,
  ErrorMessage,
  Button,
} from 'components/Form/FormStyled'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit } = useForm()
  const history = useHistory()
  const dispatch = useDispatch()

  const onSubmit = async (value) => {
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((userAuh) => {
        dispatch(
          login({
            displayName: userAuh.user.displayName,
            email: userAuh.user.email,
          })
        )
        history.push('/channel/general')
      })
      .catch((error) => {
        setLoading(false)
        setError(error.message)
      })
    setLoading(true)
  }

  return (
    <FormWrapper>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <HeaderText>Back</HeaderText>
          <SmallText>sign-in to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <NavLinks />
      <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        <Input
          type='email'
          label='email'
          id='email'
          name='email'
          register={register}
        />
        <Input
          type='password'
          label='password'
          id='password'
          name='password'
          register={register}
        />
        <ForgotPassword>
          <Link to='/'>Forgot password</Link>
        </ForgotPassword>
        <Button type='submit' disabled={loading}>
          Login
        </Button>
      </Form>
    </FormWrapper>
  )
}

export default LoginForm
