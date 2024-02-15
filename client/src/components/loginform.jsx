import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import './styles/login.css';



const Login = () => {


  return (
    <div className="sign-in__wrapper">
      <div className="sign-in__backdrop"></div>
      <Form className="hero-form p-4 bg-white rounded">

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <button className="login-btn btn">
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
