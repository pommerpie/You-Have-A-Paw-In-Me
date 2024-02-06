// src/pages/SearchPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  // Implement search logic here

  return (
    <div>
      <h2>Search for Therapy Animals</h2>
      {/* Add search form */}
      <Link to="/results">View Results</Link>
    </div>
  );
};

export default SearchPage;
