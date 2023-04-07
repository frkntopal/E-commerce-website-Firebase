import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<div className="footer-container">
  <div className="footer-top">
    <div className="footer-top-left">
      <h4>Contact Us</h4>
      <p>Contact us for your questions, opinions and suggestions.</p>
    </div>
    <div class="footer-top-right">
      <a href="https://www.linkedin.com/in/furkan-topal-0002bb200/" target='_blank'><i class="fab fa-linkedin"></i> </a>
      <a href="https://twitter.com/_frkntopal" target='_blank'><i class="fab fa-twitter"></i></a>
      <a href="https://github.com/frkntopal" target='_blank'><i class="fab fa-github"></i></a>
    </div>
  </div>
  <div className="footer-middle">
    <div className="footer-middle-left">
      <h4>About us</h4>
      <ul>
        <li><a href="#">Our mission</a></li>
      </ul>
    </div>
    <div className="footer-middle-middle">
      <h4>Our Products</h4>
      <ul>
        <li><Link to="/shop/adidas">Adidas</Link></li>
        <li><Link to="/shop/puma">Puma</Link></li>
        <li><Link to="/shop/nike">Nike</Link></li>
        <li><Link to="/shop/womens">Womens</Link></li>
        <li><Link to="/shop/mens">Mens</Link></li>
      </ul>
    </div>
    <div className="footer-middle-right">
      <h4>Support</h4>
      <ul>
        <li><a href="#">Delivery and Return</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="footer-bottom-left">
      <p>&copy; 2023, FT. All rights reserved.</p>
    </div>
  </div>
</div>

  );
};

export default Footer;
