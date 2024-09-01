import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <div className='outlet'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout