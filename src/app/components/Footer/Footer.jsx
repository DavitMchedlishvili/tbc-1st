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
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
