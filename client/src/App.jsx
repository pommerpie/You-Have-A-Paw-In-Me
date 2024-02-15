// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import AboutUs from './components/about';
import Filter from './components/filter';
import Donation from './components/donation';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <>
        <Header />
        <Hero />
        <AboutUs />
        <Filter />
        <Donation />
        <Footer />
      </>
    </Router>
  );
}

export default App;

// test
