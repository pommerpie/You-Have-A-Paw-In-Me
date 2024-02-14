// src/components/SignupForm.js
import React, { useState } from 'react';
//import axios from 'axios';
import {useMutation} from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
 import Auth from '../utils/auth';
 import { Link } from 'react-router-dom';

 const Signup = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>

      <h2>Create Account</h2>
      <form onSubmit={handleFormSubmit}>
      <form>
        <label>Email:</label>
        <input type="email" name="email" value={formState.email} onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name ="password" value={formState.password} onChange={handleChange} />

        <button type="submit">
          Create Account
        </button>
        {error && <p>{error.message}</p>} {/* Display error if it exists */}
        {/* Success message */}
        {data && !error && (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signup;

