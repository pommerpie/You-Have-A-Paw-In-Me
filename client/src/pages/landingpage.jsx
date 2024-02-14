import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //check authentication status
  const checkAuthStatus = () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      setIsLoggedIn(true);
    }
  };

    useEffect(() => {
      checkAuthStatus();
    }, []);

  return (
    <div>
      <h1>Welcome to Therapy Animal Support Fund</h1>
      {isLoggedIn ? (
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Create Account</Link>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
