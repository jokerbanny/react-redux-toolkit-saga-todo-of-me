import { configureStore } from '@reduxjs/toolkit'

// use reducer line case & action
// import booksReducer from './reducer/booskReducer'  // use like case & action

// use bookReducer like slice
import booksSlice from './slice/booksSlice'
import authSlice from './slice/authSlice'

// saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/index'

const sagaMiddleware = createSagaMiddleware()

// const store = configureStore({
//   reducer: { books: booksSlice, auth: authSlice },
// })

const store = configureStore({
  reducer: { books: booksSlice, auth: authSlice },
  // middleware: [sagaMiddleware]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
