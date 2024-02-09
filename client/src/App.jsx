// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
