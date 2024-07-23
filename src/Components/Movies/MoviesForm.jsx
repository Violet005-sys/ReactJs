import React, { useState } from 'react';

const MoviesForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, description, posterURL, rating };
    onAddMovie(newMovie);
  }

  return (
    <form onSubmit={handleSubmit} className="form m-5">
      <input
        type="text"
        placeholder="Title"
        className='form-control'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        className='form-control'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Poster URL"
        className='form-control'
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Rating"
        className='form-control'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MoviesForm;
