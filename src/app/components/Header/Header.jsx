
import ThemeSwitcher from "../../ThemeSwitcher"
import ThemeProvider from "../../utils/ThemeProvider"
import "./header.css"
import Link from 'next/link'



const Header = () => {
  return (
  
    <header className="w-full text-white bg-[#191919] ">
      <div className="header-container container">
        <Link className='nav-link' href="/">Home</Link>
        <nav >
          <div className='navigation'>
            <Link className='nav-link' href="/products">Products</Link>
            <Link className='nav-link' href="/blog">Blog</Link>
            <Link className='nav-link' href="/posts">Posts</Link>
            <Link className='nav-link' href="/about">About</Link>
            <Link className='nav-link' href="/contact">Contact Us</Link>
            <a className="nav-link" href="/api/auth/login">Login</a>
            <a className="nav-link" href="/api/auth/logout">Logout</a>
            
          </div>
        </nav>
        <Link className='profile-btn' href="/profile">Profile</Link>
        <ThemeSwitcher/>
      </div>
      
    </header>
  )
}

export default Header
