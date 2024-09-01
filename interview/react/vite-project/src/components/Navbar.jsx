import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const {amount} = useSelector((store) => store.cart)
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
                    <Link to='/redux'>Redux Demo</Link>
                </ul>
            </div>
            <div className='right-container'>
                <h1>Cart - {amount}</h1>
                <Link to='/Login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar