// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/signup', { email, password });
      console.log(response.data);
      //want to add success message and redirect after user sign up
    } catch (error) {
      console.error('Signup error:', error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleSignup}>
          Create Account
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignupForm;
