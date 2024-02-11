import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import './App.css'
import Login from './pages/loginpage.jsx'
import Signup from './pages/signuppage.jsx'
import NoMatch from './pages/NoMatch.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Login/>
      }, 
      // {
      //   path: '/login',
      //   element: <Login />
      // },
       {
        path: '/signup',
        element: <Signup />
      },
      //  {
      //   path: '/success',
      //   element: <Success />
      // }, {
      //   path: '/orderHistory',
      //   element: <OrderHistory />
      // }, {
      //   path: '/products/:id',
      //   element: <Detail />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)