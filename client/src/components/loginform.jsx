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
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
      } else {
        console.error("Failed to get token from server response.");
      }
    } catch (e) {
      console.error("Error occurred during login:", e);
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
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <button type= "submit" className="login-btn btn">
          Login
        </button>
        <div className="d-grid justify-content-end">
          <button className="forgot-pass">
            Forgot password?
          </button>
        </div>
      </Form>
    </div>

  );
};

export default Login;
