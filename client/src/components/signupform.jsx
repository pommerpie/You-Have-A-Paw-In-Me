// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {useMutation} from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
 import Auth from '../utils/auth';

 const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const [addUser] = useMutation(ADD_USER);

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      console.log('sending sign up req', {email, password});
      const { data } = await addUser({
        variables: { email, password },
      });

      console.log('signup response:', data);
      
      Auth.login(data.addUser.token);
    } catch (error) {
      console.error('Signup error:', error.message);
      if (error.message.includes('duplicate key error')) {
        setError('Email already exists. Please use a different email.');
      } else if (error.message.includes('validation error')) {
        setError('Please provide a valid email and password.');
      } else {
        setError('An error occurred while signing up. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">
          Create Account
        </button>
        {error && <p>{error}</p>} {/* Display error if it exists */}
      </form>
    </div>
  );
};

export default SignupForm;
