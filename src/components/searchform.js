// src/components/SearchForm.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    history.push(`/results?query=${searchQuery}`);
  };

  return (
    <div className="search-form">
      <h2>Search for Therapy Animals</h2>
      <form>
        <label>Search:</label>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
