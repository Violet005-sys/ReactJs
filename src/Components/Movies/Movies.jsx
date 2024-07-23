import React, { useState, useEffect } from "react";
import { moviesData } from "../data/movies";
import Filter from "./Filter";
import MoviesForm from "./MoviesForm";
import Card from "../Card/Card";
import MoviePage from "./MoviePage";

const Movies = () => {
  const [movies, setMovies] = useState(moviesData);
  const [filter, setFilter] = useState({ title: "", rating: "" });
  const [cards, setCards] = useState([]);

  // Add new movie to the list
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  // Apply filter to the movies list
  const filterMovies = (filter) => {
    setFilter(filter);
  };

  // Get filtered movies based on the filter
  const getFilteredMovies = () => {
    const { title, rating } = filter;
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        (rating ? movie.rating >= rating : true)
    );
  };

  // Update cards whenever movies or filters change
  useEffect(() => {
    const filteredMovies = getFilteredMovies();
    const updatedCards = filteredMovies.map((movie) => ({
      name: movie.title,
      extraDetail: `${movie.genre} - ${movie.rating}`,
      image: movie.posterURL,
      movieId: movie.id, // Adjusted to a dynamic movie id or fixed based on requirements
      movieLink: `/movies/${movie.id}`, // Adjusted to a dynamic movie link or fixed based on requirements
    }));
    setCards(updatedCards);
  }, [movies, filter]);

  
  

  const page = "movies"; // Adjusted to a fixed page or dynamic based on requirements
  const buttonText = "View More";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 row">
              <div className="col-md-5">
                <MoviesForm onAddMovie={addMovie} />
              </div>
              <div className="col-md-5">
                <Filter onFilter={filterMovies} />
              </div>
            </div>
          <div className="col-md-12">
            <Card cards={cards} page={page} buttonText={buttonText} movieLink={true} />
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Movies;
