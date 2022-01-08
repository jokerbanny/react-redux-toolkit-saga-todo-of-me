import { createReducer } from '@reduxjs/toolkit'
import { ADDBOOK, DELETEBOOK } from '../actions/bookAction'

const initialState = {
  books: [],
}

const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADDBOOK, (state, action) => {
      state.books.push(action.payload)
    })
    .addCase(DELETEBOOK, (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id)
    })
})

export default booksReducer
