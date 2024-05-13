import React from 'react';
import {
  IoCallOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
} from 'react-icons/io5';
import payment from '../images/payment.png';
import footerBgImg from '../images/footer-bg.jpg';

const Footer = () => {
  const footerBg = {
    backgroundImage: `url(${footerBgImg})`,
  };
  return (
    <footer className="footer" style={footerBg}>
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              PoshPaws
            </a>

            <p className="footer-text">
              If you have any question, please contact us at{' '}
              <a href="mailto:support@poshpaws.com" className="link">
                support@poshpaws.com
              </a>
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <IoLocationOutline className='icon' aria-hidden="true" />

                <address className="address">
                  30 Cresent Rd, Kololo, Kampala, UG
                </address>
              </li>

              <li className="contact-item">
                <IoCallOutline  className='icon' aria-hidden="true" />

                <a href="tel:+256712345678" className="contact-link">
                  (+256)-712-345-6789
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook className='icon'  />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter  className='icon' />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoPinterest  className='icon' />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram className='icon'  />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Corporate</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Careers
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                FAQs
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Vendors
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Affiliate Program
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Information</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Online Store
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Refund Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Shipping Policy
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Terms of Service
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Track Order
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Grooming
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Positive Dog Training
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Veterinary Services
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Petco Insurance
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Pet Adoption
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Resource Center
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2024 Made with ♥ by{' '}
            <a href="jewlius.me" target="_blank" className="copyright-link">
              Tamale.
            </a>
          </p>

          <img
            src={payment}
            width="397"
            height="32"
            loading="lazy"
            alt="payment method"
            className="img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
