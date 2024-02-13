// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/landing.css';


const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Therapy Animal Support Fund</h1>
      <p className='LandAbout'>Welcome to the Therapy Animal Support Fund, where compassion meets crowdfunding
         to create a world where the healing power of therapy animals is accessible to all.
         Our mission is simple: to make a positive impact on the lives of individuals
         facing physical, emotional, or mental challenges by providing them with the comfort and
         support of therapy animals. Here, you have the opportunity to be a catalyst for change
         by contributing to our selection of nonprofit organizations dedicated
         to bringing therapy animals to those in need. </p>

         <br>
         </br>
       <p> Ready to log in? <Link to="/login">Log in here</Link> </p>
      <p> Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default LandingPage;
