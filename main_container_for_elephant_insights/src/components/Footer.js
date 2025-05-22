import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * Footer component for Elephant Insights blog
 * Contains copyright information and additional links
 * @returns {JSX.Element} The rendered Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Elephant Insights</h3>
            <p className="footer-description">
              A comprehensive blog exploring the fascinating world of elephants,
              their behavior, conservation, and ecological importance.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/behavior" className="footer-link">Behavior</Link></li>
              <li><Link to="/conservation" className="footer-link">Conservation</Link></li>
              <li><Link to="/ecology" className="footer-link">Ecology</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-links">
              <li><Link to="#" className="footer-link">About Us</Link></li>
              <li><Link to="#" className="footer-link">Contact</Link></li>
              <li><Link to="#" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Elephant Insights. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
