import { useDispatch } from 'react-redux'
import { FETCHRANDOMUSER, LOGOUT } from '../store/slice/authSlice'

//Handling extra action
const GetUser = () => {
  const dispatch = useDispatch()

  return (
    <div className=' text-center rounded-md mt-10 bg-white py-4 shadow-lg max-w-2xl mx-auto'>
      <h1 className='text-gray-600 mb-2 text-lg font-semibold'>
        Personal Library
      </h1>
      <div className='space-x-4'>
        <button
          className='bg-yellow-400 px-4 py-1 rounded-md font-semibold'
          onClick={() => dispatch(LOGOUT())}
        >
          Logout
        </button>
        <button
          className='bg-yellow-400 px-4 py-1 rounded-md font-semibold'
          onClick={() => dispatch(FETCHRANDOMUSER())}
        >
          Get User
        </button>
      </div>
    </div>
  )
}

export default GetUser
