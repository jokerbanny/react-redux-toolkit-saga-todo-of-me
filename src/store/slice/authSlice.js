import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: true,
  user: {},
  loading: false,
  error: null,
}

export const FETCHRANDOMUSER = createAsyncThunk(
  'AUTH/FETCHRANDOMUSER',
  async () => {
    try {
      const res = await fetch('https://randomuser.me/api/')
      const data = await res.json()
      return data.results[0]
    } catch (error) {
      throw Error(error)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGOUT(state, action) {
      state.isLoggedIn = false
      state.user = {}
    },
  },
  extraReducers: {
    [FETCHRANDOMUSER.pending]: (state, action) => {
      state.loading = true
      state.error = null
    },
    [FETCHRANDOMUSER.fulfilled]: (state, action) => {
      state.user = action.payload
      state.loading = false
    },
    [FETCHRANDOMUSER.rejected]: (state, action) => {
      state.error = action.error.message
      state.loading = false
    },
  },
})

export const { LOGOUT } = authSlice.actions
export default authSlice.reducer
