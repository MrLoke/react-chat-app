import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from 'features/userSlice'
import channelReducer from 'features/channelSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistUserConfig = {
  key: 'user',
  storage,
}

const persistChannelConfig = {
  key: 'channel',
  storage,
}

const persistedUserReducer = persistReducer(persistUserConfig, userReducer)
const persistedChannelReducer = persistReducer(persistChannelConfig, channelReducer)

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    channels: persistedChannelReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store
