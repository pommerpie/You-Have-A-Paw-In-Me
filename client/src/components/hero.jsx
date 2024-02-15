import React from 'react';
import Login from './loginform';
import Signup from './signupform';
import "./styles/hero.css"

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container content">
                <Signup />
                <Login />
            </div>
        </section>
    );
};

export default Hero;
