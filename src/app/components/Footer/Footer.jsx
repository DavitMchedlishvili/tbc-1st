
import Link from "next/link";
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container container">
        <div className="footer-left">
          <a className="logo" href="#">Footer</a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sit
            placeat rerum tempore rem assumenda ex tempora at voluptatum
            explicabo magnam, quo incidunt qui hic enim mollitia! Odit,
            inventore nemo.
          </p>
        </div>

        <div className="footer-right">
          <ul className="footer-nav-links">
          <Link href="/products">
              Products
            </Link>
            <Link href="/posts">
              Posts
            </Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
