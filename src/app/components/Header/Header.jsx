import "./header.css"
import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <Link className='logo' href="/">Header</Link>
        <nav >
          <div className='navigation'>
            <Link href="/products">
              Products
            </Link>
            <Link href="/posts">
              Posts
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
