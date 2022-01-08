import { useDispatch, useSelector } from 'react-redux'
// import { DELETEBOOK } from '../store/actions/bookAction'
import { DELETEBOOK } from '../store/slice/booksSlice'
const TodoList = () => {
  const { books } = useSelector((state) => state.books)
  const dispatch = useDispatch()
  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <div className='mt-6 bg-white p-6 rounded-md text-gray-500 shadow-lg'>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p className='mb-5'>{book.rating}</p>
            <div className='space-x-4'>
              <span
                className='bg-red-500 px-6 py-1 text-white rounded-md cursor-pointer'
                onClick={() => dispatch(DELETEBOOK(book, book.id))}
              >
                Edit
              </span>
              <span
                className='bg-gray-100 px-4 py-1 text-gray-600 rounded-md cursor-pointer'
                onClick={() => dispatch(DELETEBOOK(book, book.id))}
              >
                Delete
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default TodoList
