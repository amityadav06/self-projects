import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
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
        <div className='w-1/2 m-auto'>
            <img 
                src='https://cdn.dribbble.com/users/1138875/screenshots/4669703/404_animation.gif'
                alt='error-page'
            />
        </div>
    </div>
  )
}

export default Error