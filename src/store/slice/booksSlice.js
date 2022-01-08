import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { LOGOUT } from './authSlice'
const initialState = {
  books: [],
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // before prepare
    // ADDBOOK(state, action) {
    //   state.books.push(action.payload)
    // },

    // after prepare
    ADDBOOK: {
      reducer: (state, action) => {
        state.books.push(action.payload)
      },
      prepare: (value) => {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        }
      },
    },
    DELETEBOOK(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload.id)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LOGOUT, (state, action) => {
      state.books = []
    })
  },
})

export const { ADDBOOK, DELETEBOOK } = booksSlice.actions

export default booksSlice.reducer
