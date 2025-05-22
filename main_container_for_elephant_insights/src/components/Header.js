import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

/**
 * Header component for Elephant Insights blog
 * Contains the logo and navigation links
 * @returns {JSX.Element} The rendered Header component
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🐘</span>
          <span className="logo-text">Elephant Insights</span>
        </Link>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/behavior" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Behavior
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/conservation" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Conservation
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ecology" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                Ecology
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
