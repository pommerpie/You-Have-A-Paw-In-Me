// src/components/Header.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">Therapy Animal Support Fund</div>
      <nav className={menuOpen ? 'open' : ''}>
        <a href="/">Home</a>
        <a href="/signup">Signup</a>
        <a href="/search">Search</a>
        <a href="/donate">Donate</a> 
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
