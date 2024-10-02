import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <a className='logo' href="#">Header</a>
        <nav >
          <div className='navigation'>
            <Link to="/">
              Home
            </Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </nav>
        <Link className='git-btn' to="https://github.com/DavitMchedlishvili">GitHub</Link>
      </div>
    </header>
  )
}

export default Header
