import React from 'react';

function Search({ setValue }) {
  return (
    <input
      type='search'
      name='languages'
      id='languages'
      className='search-input'
      placeholder='Search...'
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Search;
