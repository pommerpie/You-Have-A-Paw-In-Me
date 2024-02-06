// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">Therapy Animal Support Fund</div>
      <nav className={menuOpen ? 'open' : ''}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/search">Search</Link>
        <Link to="/donate">Donate</Link>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
