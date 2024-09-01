import { Image, Link } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (  
    <nav className='flex items-center justify-between'>
      <div>
        <img className='bg-transparent h-32 w-32 cursor-pointer' src='./zoho-logo1.svg' alt='zoho-logo' />
      </div>
      <div>
        <ul className='flex items-center gap-6 cursor-pointer'>
          <li className='hover:text-slate-200'> Dashboard</li>
          <li className='hover:text-slate-200'>Accounts</li>
          <li className='hover:text-slate-200'> Contact</li>
          <li className='hover:text-slate-200'> Profile</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar