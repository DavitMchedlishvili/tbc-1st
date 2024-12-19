import Link from "next/link";
import "./footer.css"
import Fb from "../../../../../public/assets/facebook.png";
import Inst from "../../../../../public/assets/instagram.png";
import Tvt from "../../../../../public/assets/twitter.png";


const Footer = () => {
  return (
    <footer>
      <div className="footerContext">
          <h3>contact us</h3>
          <p>Email: info@gmail.com</p>
          <p>Phone: +995 555-11-11-11</p>
      </div>
      <div className="footerContext">
          <h3>navigation</h3>
          <ul className='navList'>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/posts">Posts</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>          
          </ul>
      </div>
      <div className="footerContext">
          <h3>follow us</h3>
          <ul className='social-networks'>
              <li>
                  <a href="#">
                      <img src={Fb.src} alt="facebook" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src={Inst.src} alt="instagram" />
                  </a>
              </li>
              <li>
                  <a href="#">
                      <img src={Tvt.src} alt="twitter" />
                  </a>
              </li>
          </ul>
      </div>
    </footer>  
  )
}

export default Footer;