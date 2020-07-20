import React from 'react';

const MovieList = props => {
  const {movieList} = props;
  console.log(movieList)
  
  return (
    <div className="movie-list">
      {movieList.map(movie => {
        return <MovieDetails key={movie.id} movie={movie} />
      })}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
