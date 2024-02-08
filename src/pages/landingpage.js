// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Therapy Animal Support Fund</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Create Account</Link>
    </div>
  );
};

export default LandingPage;
