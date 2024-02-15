import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import LandingPage from './pages/landingpage';
import Signup from './pages/signuppage';
import Login from './pages/loginpage';
import Donation from './pages/donationpage';
import Search from './pages/searchpage';
import Results from './pages/resultspage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/search',
        element: <Search />
      }, {
        path: '/donation',
        element: <Donation />
      }, {
        path: '/results',
        element: <Results />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
