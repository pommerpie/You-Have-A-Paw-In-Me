import React ,{ useState } from 'react';
import Login from './loginform';
import Signup from './signupform';
import Auth from '../utils/auth';
import "./styles/hero.css"

const Hero = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle login status
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };
    const handleLogout = () => {
        Auth.logout();
        toggleLoginStatus();
    };
    return (
        <section id='hero' className={isLoggedIn ? 'logged-in' : 'logged-out'}>
            <div className="container content">
                {/* Check if the user is logged in */}
                {Auth.loggedIn() ? (
                    // User is logged in, display welcome message
                    <div className="welcome-message" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        <p>You are now logged in, we are so happy to see you!</p>
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    </div>
                ) : (
                    // User is not logged in, display signup and login forms
                    <>
                        <Signup />
                        <Login />
                    </>
                )}
            </div>
        </section>
    );
};

export default Hero;
