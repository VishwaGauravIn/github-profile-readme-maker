import React from 'react';

function Search({ setValue, className, placeholder }) {
  return (
    <input
      type='search'
      name='languages'
      id='languages'
      placeholder={placeholder}
      className={`search-input ${className}`}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Search;
