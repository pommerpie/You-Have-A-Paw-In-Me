// src/components/SignupForm.js
import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic using the state values (email and password)
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
      </form>
    </div>
  );
};

export default SignupForm;
