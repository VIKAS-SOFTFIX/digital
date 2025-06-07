import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Logo from '@/components/Logo/Logo';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-widgets">
            <div className="footer-widget">
              <div className="footer-logo">
                <Logo variant="light" size="medium" />
              </div>
              <p>
                We're a team of experienced designers, developers, and strategists. We create digital products that help businesses solve problems and achieve their goals.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link href="/industries">Industries</Link>
                </li>
                <li>
                  <Link href="/insights">Insights</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Our Services</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/development">Software Development</Link>
                </li>
                <li>
                  <Link href="/development">Web Application Development</Link>
                </li>
                <li>
                  <Link href="/development">Mobile App Development</Link>
                </li>
                <li>
                  <Link href="/development">UX/UI Design</Link>
                </li>
                <li>
                  <Link href="/development">DevOps</Link>
                </li>
                <li>
                  <Link href="/development">QA and Testing</Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h4 className="widget-title">Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <p>123 Tech Avenue, San Francisco, CA 94107</p>
                </li>
                <li>
                  <FaPhoneAlt />
                  <p>+1 (555) 987-6543</p>
                </li>
                <li>
                  <FaEnvelope />
                  <p>info@toplogicsoftlabs.com</p>
                </li>
              </ul>
              <div className="newsletter">
                <h5>Subscribe to our newsletter</h5>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit" className="btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} TopLogic SoftLabs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 