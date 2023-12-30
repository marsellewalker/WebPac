// Import necessary React components and styles
import React, { useState } from 'react';

// Functional component for the header
const Header = () => {
  // State to track the visibility of the menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">Your Logo</div>
      {/* Render hamburger menu icon when screen width is 600px or less */}
      {window.innerWidth <= 600 && (
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`menu-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      )}
      {/* Render menu items */}
      <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Header;
