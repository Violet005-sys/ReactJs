import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        className='form-control'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating"
        className='form-control'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
