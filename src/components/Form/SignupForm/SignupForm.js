import { useRef, useState } from 'react'
import Input from 'components/Form/Input/Input'
import NavLinks from 'components/Form/NavLinks/NavLinks'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from 'features/userSlice'
import { auth, db } from 'firebase-config'
import {
  FormWrapper,
  Form,
  TopContainer,
  HeaderText,
  SmallText,
  BackDrop,
  HeaderContainer,
  ErrorMessage,
  Button,
} from 'components/Form/FormStyled'

const SignupForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm()
  const password = useRef({})
  password.current = watch('password', '')
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (value) => {
    auth
      .createUserWithEmailAndPassword(value.email, value.password)
      .then((userAuth) => {
        db.collection('users').doc(userAuth.user.uid).set({
          userId: userAuth.user.uid,
          displayName: value.username,
          email: value.email,
          photoURL: value.profile_avatar,
        })
        userAuth.user
          .updateProfile({
            displayName: value.username,
            email: value.email,
            photoURL: value.profile_avatar,
          })
          .then(() => {
            dispatch(
              login({
                displayName: value.username,
                email: value.email,
                photoURL: value.profile_avatar,
              })
            )
          })
      })
      .catch((error) => {
        setLoading(false)
        setError(error.message)
      })
    history.push('/channel/general')
    setLoading(true) // prevent to create multiple accounts
  }

  return (
    <FormWrapper>
      <TopContainer>
        <BackDrop />
        <HeaderContainer>
          <HeaderText>Create an</HeaderText>
          <HeaderText>Account</HeaderText>
          <SmallText>and lets start chat!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <NavLinks />
      <Form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          label='username'
          id='username'
          name='username'
          register={register({
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username is to short 3 characters minimum',
            },
          })}
        />
        {errors.username && (
          <ErrorMessage>{errors.username.message}</ErrorMessage>
        )}
        <Input
          type='email'
          label='email'
          id='email'
          name='email'
          register={register({
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          type='text'
          label='profile url avatar'
          id='profile_avatar'
          name='profile_avatar'
          register={register({
            // required: 'Profile avatar is required',
            pattern: {
              value: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
              message: 'invalid url',
            },
          })}
          defaultValue='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
        />
        {errors.profile_avatar && (
          <ErrorMessage>{errors.profile_avatar.message}</ErrorMessage>
        )}
        <Input
          type='password'
          label='password'
          id='password'
          name='password'
          errors={errors.password}
          register={register({
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'password is to short 6 characters minimum',
            },
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
        <Input
          type='password'
          label='confirm password'
          id='password_repeat'
          name='password_repeat'
          register={register({
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {errors.password_repeat && (
          <ErrorMessage>{errors.password_repeat.message}</ErrorMessage>
        )}
        <Button type='submit' disabled={loading}>
          Create account
        </Button>
        {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      </Form>
    </FormWrapper>
  )
}

export default SignupForm
