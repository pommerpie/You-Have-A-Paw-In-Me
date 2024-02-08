// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import LandingPage from './pages/landingpage';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import SearchPage from './pages/searchpage';
import ResultsPage from './pages/resultspage';
import DonationPage from './pages/donationpage';

function App() {
  return (
    // <Router>
    //   <div>
    //     <Header />
    //     <Switch>
    //       <Route path="/" exact component={LandingPage} />
    //       <Route path="/login" component={LoginPage} />
    //       <Route path="/signup" component={SignupPage} />
    //       <Route path="/search" component={SearchPage} />
    //       <Route path="/results" component={ResultsPage} />
    //       <Route path="/donate" component={DonationPage} />
    //     </Switch>
    //     <Footer />
    //   </div>
    // </Router>
    <div>
      <Header />
      <LoginPage/>
       <LandingPage /> 
     <Footer /> 
    </div>
  );
}

export default App;
