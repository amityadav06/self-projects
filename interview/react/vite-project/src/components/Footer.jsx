import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='navbar-main'>
        <div className='nav-inner'>
            <div className='left-container'>
                <div className='logo'>
                    <h1 className='logo-heading'>CodeTime</h1>
                </div>
                <ul className='nav-title'>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/offers'>Offers</Link>
                    <Link to='/bookings'>Bookings</Link>
                    <Link to='/hotels'>Hotels</Link>
                </ul>
            </div>
            <div className='right-container'>
                <h1>Cart</h1>
                <h1>Sign up</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer