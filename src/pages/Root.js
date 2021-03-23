import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import { useDispatch } from 'react-redux'
import { login, logout } from 'features/userSlice'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyles'
import { theme } from 'theme/theme'
import { ModalProvider } from 'styled-react-modal'
import { auth, db } from 'firebase-config'

const Login = lazy(() => import('pages/Login'))
const Signup = lazy(() => import('pages/Signup'))
const Home = lazy(() => import('pages/Home'))
const Chat = lazy(() => import('pages/Chat'))
const NotFound = lazy(() => import('pages/NotFound'))

const Root = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        db.collection('users')
          .doc(auth.currentUser.uid)
          .get()
          .then((doc) => doc.ref.update({ status: 'online' }))
        dispatch(
          login({
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Suspense fallback={<LoadingSpinner fullScreen />}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/channel/:id' component={Chat} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Router>
        </Suspense>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Root
