import "./header.css"
import Link from 'next/link'



const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <Link className='nav-link' href="/">Home</Link>
        <nav >
          <div className='navigation'>
            <Link className='nav-link' href="/products">Products</Link>
            <Link className='nav-link' href="/blog">Blog</Link>
            <Link className='nav-link' href="/posts">Posts</Link>
            <Link className='nav-link' href="/about">About</Link>
            <Link className='nav-link' href="/contact">Contact Us</Link>
            <Link className="nav-link" href="/api/auth/login">Login</Link>
            <Link className="nav-link" href="/api/auth/logout">Logout</Link>
            
          </div>
        </nav>
        <Link className='profile-btn' href="/profile">Profile</Link>
        
      </div>
    </header>
  )
}

export default Header
