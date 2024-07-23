// src/components/Card.js
import React from "react";
import { useParams, Link } from 'react-router-dom';
import { moviesData } from '../data/movies';

const MoviePage = ({ cards, page, buttonText }) => {
    const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="row">
      {moviesData.map((card, index) => (
        <div key={index} className="col-md-4">
          <div className="card m-2" style={{ width: "18rem" }}>
            <iframe
              src={card.trailerURL}
              frameborder="0"
              width="560"
              height="315"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="card-body">
              <p className="card-text">{card.description}</p>
              <hr />
              <a href={`/${page}`} className="btn btn-primary">
                {buttonText}
              </a>
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviePage;
