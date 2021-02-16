import { useEffect } from 'react'
import Home from 'pages/Home'
import Chat from 'pages/Chat'
import Signup from 'pages/Signup'
import Login from 'pages/Login'
import NotFound from 'pages/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, logout } from 'features/userSlice'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyles'
import { theme } from 'theme/theme'
import { ModalProvider } from 'styled-react-modal'
import { auth } from 'firebase-config'

const Root = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
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
      <ModalProvider> {/* from styled-react-modal */}
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
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Root
