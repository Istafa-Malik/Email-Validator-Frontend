import React from 'react';
import './Footer.css'; // Import the new CSS file

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="footer-inner-container">
        <div className="footer-grid">
          <div>
            <p className="footer-heading">About Us</p>
            <ul className="footer-list">
              <li><a href="/about" className="footer-link">Our Story</a></li>
              <li><a href="/team" className="footer-link">Team</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Support</p>
            <ul className="footer-list">
              <li><a href="/help" className="footer-link">Help Center</a></li>
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/terms" className="footer-link">Terms of Service</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Resources</p>
            <ul className="footer-list">
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/guides" className="footer-link">Guides</a></li>
              <li><a href="/case-studies" className="footer-link">Case Studies</a></li>
              <li><a href="/webinars" className="footer-link">Webinars</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-heading">Contact Us</p>
            <ul className="footer-list">
              <li><a href="/support" className="footer-link">Support</a></li>
              <li><a href="/feedback" className="footer-link">Feedback</a></li>
              <li><a href="/report-issue" className="footer-link">Report an Issue</a></li>
              <li><a href="/affiliate" className="footer-link">Affiliate Program</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-text">© 2024 Email Validator Inc. All rights reserved.</p>
          <div className="footer-icons">
            <a href="https://twitter.com" className="footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.4,5.5,24,4.6z"/>
              </svg>
            </a>
            <a href="https://facebook.com" className="footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M12,0c-6.6,0-12,5.4-12,12s5.4,12,12,12c6.6,0,12-5.4,12-12S18.6,0,12,0z M15.6,7.5h-1.6c-0.8,0-1.5,0.7-1.5,1.5v2.5h3l-0.5,3 h-2.5v6h-3v-6h-2v-3h2v-2.5C9.6,7.8,10.8,7.5,12,7.5h3.6V7.5z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" className="footer-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
                <path d="M22.23,0H1.77C0.79,0,0,0.79,0,1.77v20.46C0,23.21,0.79,24,1.77,24H22.23c0.98,0,1.77-0.79,1.77-1.77 V1.77C24,0.79,23.21,0,22.23,0z M8.62,20.45H5.24v-9.27h3.38V20.45z M6.93,9.8c-1.12,0-2.03-0.91-2.03-2.03s0.91-2.03,2.03-2.03 c1.12,0,2.03,0.91,2.03,2.03S8.05,9.8,6.93,9.8z M20.45,20.45h-3.38v-5.17c0-1.23-0.02-2.82-1.72-2.82 c-1.72,0-1.98,1.35-1.98,2.74v5.25h-3.38V12.18h3.24v1.35c0.45-0.85,1.55-1.75,3.25-1.75c3.48,0,4.12,2.30,4.12,5.29V20.45z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
