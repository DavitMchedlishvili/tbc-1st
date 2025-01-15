import "./header.css"
import ThemeSwitcher from "../Togglers/ThemeSwitcher"
import { Link } from "../../../../i18n/routing"
import LanguageSwitcher from "../Togglers/LanguageSwitcher"
import { useTranslations } from "next-intl"
import { LoginOutBtn } from "../LogInOutBTN/LoginOutBtn"



const Header = () => {

  const t = useTranslations('Header');

  return (
  
    <header className="w-full text-white bg-[#191919] ">
      <div className="header-container container">
        <Link className='nav-link' href="/">{t('Home')}</Link>
        <nav >
          <div className='navigation'>
            <Link className='nav-link' href="/products">{t('Products')}</Link>
            <Link data-cy="myproduct-link" className='nav-link' href="/myproducts">My Products</Link>
            <Link className='nav-link' href="/blog">{t('Blog')}</Link>
            <Link className='nav-link' href="/posts">{t('Posts')}</Link>
            <Link className='nav-link' href="/about">{t('About')}</Link>
            <Link className='nav-link' href="/contact">{t('Contact Us')}</Link>
            <Link data-cy="create-product-link" className="nav-link" href="/create-product">Create Product</Link>
            
          </div>
        </nav>
        <LoginOutBtn/>
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
