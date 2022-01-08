import FormInput from './components/FormInput'
import GetUser from './components/GetUser'
import Navbar from './components/sheared/Navbar'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='bg-slate-100 pb-10 min-h-screen'>
      <Navbar />
      <FormInput />
      <Todos />
      <GetUser />
    </div>
  )
}

export default App
