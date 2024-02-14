import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/landing.css';


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
        <>
          <div>
            <Link to="/logout">Logout</Link>
          </div>
          <p className='LandAbout'>Welcome to the Therapy Animal Support Fund, where compassion meets crowdfunding
            to create a world where the healing power of therapy animals is accessible to all.
            Our mission is simple: to make a positive impact on the lives of individuals
            facing physical, emotional, or mental challenges by providing them with the comfort and
            support of therapy animals. Here, you have the opportunity to be a catalyst for change
            by contributing to our selection of nonprofit organizations dedicated
            to bringing therapy animals to those in need.
          </p>
        </>
      ) : (
        <>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Create Account</Link>
          </div>
          <p> Ready to log in? <Link to="/login">Log in here</Link> </p>
          <p> Don't have an account? <Link to="/signup">Sign up here</Link></p>
        </>
      )}
    </div>
  );
};

export default LandingPage;
