// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header';
// import Footer from './components/footer';
// import LandingPage from './pages/landingpage';
// import LoginPage from './pages/loginpage';
// import SignupPage from './pages/signuppage';
// import SearchPage from './pages/searchpage';
// import ResultsPage from './pages/resultspage';
// import DonationPage from './pages/donationpage';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <Router>
//       <>
//         <Header />
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/search" element={<SearchPage />} />
//           <Route path="/results" element={<ResultsPage />} />
//           <Route path="/donate" element={<DonationPage />} />
//         </Routes>
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default App;
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/header';
import Footer from './components/footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3005/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
