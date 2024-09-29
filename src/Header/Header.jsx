import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <a className='logo' href="#">Header</a>
        <nav >
          <ul className='navigation'>
            <Link to={"/"}>Home</Link>
            <Link to={"/store"}>Store</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact Us</Link>
          </ul>
        </nav>
        <Link className='git-btn' href="https://github.com/DavitMchedlishvili">GitHub</Link>
      </div>
    </header>
  )
}

export default Header
