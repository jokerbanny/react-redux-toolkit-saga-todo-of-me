import { useState } from 'react'
import { useDispatch } from 'react-redux'

// use Like reducer & action
// import { ADDBOOK } from '../store/actions/bookAction'

import { ADDBOOK } from '../store/slice/booksSlice'

const FormInput = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState({
    title: '',
    author: '',
    rating: '',
  })

  const { title, author, rating } = todo

  const handleOnChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    //use like reducer addCase
    // dispatch(ADDBOOK(todo))

    // use like slice reducer same
    dispatch(ADDBOOK(todo))

    setTodo({
      title: '',
      author: '',
      rating: '',
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='bg-white rounded-md py-10 px-20 shadow-lg  max-w-2xl mx-auto mt-10'>
        <h1 className='text-xl mt-2 text-center font-semibold text-gray-600'>
          Whrite Todo List
        </h1>
        <div className='mt-6 flex flex-col space-y-4 m-10 justify-center'>
          <input
            type='number'
            placeholder='Raging'
            min='0'
            max='10'
            name='rating'
            className='cursor-pointer bg-gray-100 w-20 text-center rounded-md pl-2 outline-none   py-2 border-2'
            onChange={handleOnChange}
            value={rating}
          />
          <input
            placeholder='Title...'
            name='title'
            className='bg-gray-100 rounded-md py-2 px-4 border-2 outline-none'
            onChange={handleOnChange}
            value={title}
          />
          <input
            placeholder='Autor...'
            className='bg-gray-100 rounded-md py-2 px-4 border-2 outline-none'
            name='author'
            onChange={handleOnChange}
            value={author}
          />
          <button
            type='submit'
            className='bg-yellow-400 py-2 rounded-md font-semibold'
          >
            Add Book
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormInput
