import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Form, Alert } from "react-bootstrap";
import './styles/login.css';
import Auth from "../utils/auth";



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
    <div className="sign-up__wrapper">
      <div className="sign-up__backdrop"></div>
      <Form onSubmit={handleFormSubmit} className="hero-form p-4 bg-white rounded">

        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formState.email} onChange={handleChange} placeholder="Email" required />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formState.password} onChange={handleChange} placeholder="Password" required />
        </Form.Group>
        <button type= "submit" className="login-btn btn">
          Sign up
        </button>
        {error && <p>{error.message}</p>} {/* Display error if it exists */}
        {/* Success message */}
        {data && !error && (
          <p>
            Success! You are now logged in.{' '}
          </p>
        )}
      </Form>
    </div>

  );
};

export default Signup;

