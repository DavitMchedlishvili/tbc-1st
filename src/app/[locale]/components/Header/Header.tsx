import "./header.css"
import ThemeSwitcher from "../Togglers/ThemeSwitcher"
import { Link } from "../../../../i18n/routing"
import LanguageSwitcher from "../Togglers/LanguageSwitcher"
import { useTranslations } from "next-intl"



const Header = () => {

  const t = useTranslations('Header');

  return (
  
    <header className="w-full text-white bg-[#191919] ">
      <div className="header-container container">
        <Link className='nav-link' href="/">{t('Home')}</Link>
        <nav >
          <div className='navigation'>
            <Link className='nav-link' href="/products">{t('Products')}</Link>
            <Link className='nav-link' href="/blog">{t('Blog')}</Link>
            <Link className='nav-link' href="/posts">{t('Posts')}</Link>
            <Link className='nav-link' href="/about">{t('About')}</Link>
            <Link className='nav-link' href="/contact">{t('Contact Us')}</Link>
            <a className="nav-link" href="/api/auth/login">{t('Login')}</a>
            <a className="nav-link" href="/api/auth/logout">{t('Logout')}</a>
            
          </div>
        </nav>
        <Link className='profile-btn' href="/profile">{t('Profile')}</Link>
        <div className="flex gap-3">
        <LanguageSwitcher/>
        <ThemeSwitcher/>
        </div>
      </div>
      
    </header>
  )
}

export default Header
