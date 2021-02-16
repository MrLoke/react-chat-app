import { createSlice } from '@reduxjs/toolkit'

export const channelSlice = createSlice({
  name: 'channels',
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId
      state.channelName = action.payload.channelName
    },
  },
})

export const { setChannelInfo } = channelSlice.actions

export const selectChannelId = (state) => state.channels.channelId
export const selectChannelName = (state) => state.channels.channelName

export default channelSlice.reducer
