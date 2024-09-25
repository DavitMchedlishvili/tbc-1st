import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <a className='logo' href="#">Header</a>
        <nav >
          <ul className='navigation'>
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <a className='git-btn' href="https://github.com/DavitMchedlishvili">GitHub</a>
      </div>
    </header>
  )
}

export default Header
