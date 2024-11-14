import { Link } from 'react-router-dom'
import Copy from './components/stepper/Copy'
import PracticeComponent from './components/practice-component/PracticeComponent'
import OTPContainer from './components/roadside_coder/mobile_otp/otp-container'

function App() {
  return (
    <div className=' bg-slate-200 w-100 min-h-screen'>
      <header>
        <nav className='w-100 flex gap-8 font-semibold p-4'>
          <Link to='/'>Home</Link>
          <Link to='/game'>Game</Link>
          <Link to='/form'>Form</Link>
          <Link to='/project'>Project</Link>
          <Link to='/comments'>Comment</Link>
        </nav>
      </header>
      <div className='text-center'>
        <p className='text-6xl font-serif font-semibold'>Practice Application</p>
      </div>

      <div className="mx-auto mt-4 w-1/3">
        {/* <Copy /> */}
        {/* <PracticeComponent /> */}
        <OTPContainer />
      </div>
    </div>
  )
}

export default App
