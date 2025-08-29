import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: '/', label: 'Home'},
    { path: '/about', label: 'About'},
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  const navbarStyles = {
    background: 'rgba(40, 5, 48, 0.9)',
    backdropFilter: 'blur(10px)',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const containerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    padding: '0 2rem'
  };

  const logoStyles = {
    fontSize: '2rem',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    transition: 'transform 0.3s ease'
  };

  const menuStyles = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontWeight: '500'
  };

  const activeLinkStyles = {
    ...linkStyles,
    background: 'rgba(102, 126, 234, 0.2)',
    color: '#667eea'
  };

  const mobileMenuStyles = {
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '80px',
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '2rem 0',
    listStyle: 'none'
  };

  return (
    <nav style={navbarStyles}>
      <div style={containerStyles}>
        <NavLink 
          to="/" 
          style={logoStyles}
          onClick={closeMenu}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Yasmeen
        </NavLink>

        <button
          onClick={toggleMenu}
          style={{
            display: window.innerWidth <= 768 ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul style={{ ...menuStyles, display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
          {navItems.map(({ path, label, icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                style={({ isActive }) => isActive ? activeLinkStyles : linkStyles}
                onClick={closeMenu}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  if (!e.target.classList.contains('active')) {
                    e.target.style.background = 'transparent';
                  }
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <span>{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul style={mobileMenuStyles}>
          {navItems.map(({ path, label, icon }) => (
            <li key={path} style={{ margin: '1rem 0', textAlign: 'center' }}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  ...linkStyles,
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  ...(isActive ? { color: '#667eea', background: 'rgba(102, 126, 234, 0.2)' } : {})
                })}
                onClick={closeMenu}
              >
                <span>{icon}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;