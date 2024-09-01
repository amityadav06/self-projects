import React from 'react'
import Logo from '/amit_logo.svg'
import '../assets/css/header.css'

const Header = () => {
  return (
    <div className="header-top-fixed one-page-nav">
        <div className="container">
            <div className="logo">
                <a className="navbar-brand" href="/">
                    <img className="logo-light" alt="Logo" src={Logo} />
                </a>
            </div>
            <ul className="main-menu">
                <li><a className="active">Home</a></li>
                <li><a>About Me</a></li>
                <li><a>Projects</a></li>
                <li><a>Services</a></li>
                <li><a>Contact</a></li>
            </ul>
            <div className="d-flex">
                <a className="px-btn d-none d-lg-inline-flex">Lets' Talk</a>
                <button className="toggler-menu d-lg-none"><span></span></button>
            </div>
        </div>
    </div>
  )
}

export default Header