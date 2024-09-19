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
/* 
Test Link for Flipkart SDE-2 Referral: https://bit.ly/4e5h8xC

- Syllabus: Coding (DSA)

- Deadline: 5th September, 11:59 pm

- Top 3 would be mailed about the results and referral further process on coming Monday.

Do join the Community of like-minded peers for updates, to discuss and reach out for queries: https://chat.whatsapp.com/I72sqJjtOEqD7QpCndHsYH

Website to check out our upcoming advanced software development course: https://bit.ly/ns-asde */