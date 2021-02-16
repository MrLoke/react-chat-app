import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../firebase-config'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload
      state.isLogged = true
    },
    logout: (state) => {
      auth.signOut()
      localStorage.removeItem('persist:user')
      state.userInfo = null
      state.isLogged = false
    },
  },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
