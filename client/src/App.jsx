// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import SearchPage from '../pages/SearchPage';
import ResultsPage from '../pages/ResultsPage';
import DonationPage from '../pages/DonationPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/donate" component={DonationPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
