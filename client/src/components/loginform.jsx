import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import './styles/login.css';



const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
        setSuccessMessage('Logged in successfully.');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to get token from server response.');
        setSuccessMessage('');
      }
    } catch (e) {
      console.error("Error occurred during login:", e);
      setErrorMessage('An error occurred during login.');
      setSuccessMessage('');
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };


  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <Form  onSubmit={handleFormSubmit} className="hero-form p-4 bg-white rounded">

        <Form.Group className="mb-2" controlId="login-email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formState.email} onChange={handleChange} placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="login-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formState.password} onChange={handleChange} placeholder="Password" required />
        </Form.Group>
        
        <button type= "submit" className=" btn btn-primary">
          Login
        </button>
      
      </Form>

      {error && <p>{error.message}</p>} {/* Display error if it exists */}
      {/* Success message */}
      {data && !error && (
        <p>
          Success! You are now logged in.{' '}
        </p>
      )}
    </div>

  );
};

export default Login;
