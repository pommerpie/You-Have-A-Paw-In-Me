// // src/components/SignupForm.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import {useMutation} from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';
//  import Auth from '../utils/auth';

//  const SignupForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const [addUser] = useMutation(ADD_USER);

//   const handleSignup = async (event) => {
//     event.preventDefault();

//     try {
//       console.log('sending sign up req', {email, password});
//       const { data } = await addUser({
//         variables: { email, password },
//       });

//       console.log('signup response:', data);

//       Auth.login(data.addUser.token);
//     } catch (error) {
//       console.error('Signup error:', error.message);
//       if (error.message.includes('duplicate key error')) {
//         setError('Email already exists. Please use a different email.');
//       } else if (error.message.includes('validation error')) {
//         setError('Please provide a valid email and password.');
//       } else {
//         setError('An error occurred while signing up. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Create Account</h2>
//       <form onSubmit={handleSignup}>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <button type="submit">
//           Create Account
//         </button>
//         {error && <p>{error}</p>} {/* Display error if it exists */}
//       </form>
//     </div>
//   );
// };

// export default SignupForm;

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

