import React from 'react'
import "./header.css"
import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <a className='logo' href="#">Header</a>
        <nav >
          <div className='navigation'>
            <Link href="/">
              Home
            </Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </nav>
        <Link className='profile-btn' href="/profile">Profile</Link>
      </div>
    </header>
  )
}

export default Header
