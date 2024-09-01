import { Header } from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className='min-h-screen container'>
            {/* Header */}
            {/* body */}
            <Header />
            <Outlet />
        </main>
        {/* footer */}
        <div className='p-10 text-center mt-10 bg-gray-800'>
            Made with 💖 by Developer
        </div>
    </div>
  )
}

export default AppLayout