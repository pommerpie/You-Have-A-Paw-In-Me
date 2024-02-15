import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import './styles/login.css';



const Signup = () => {


  return (
    <div className="sign-up__wrapper">
      <div className="sign-up__backdrop"></div>
      <Form className="hero-form p-4 bg-white rounded">

        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <button className="login-btn btn">
          Sign up
        </button>
      </Form>
    </div>

  );
};

export default Signup;
