import React from 'react';
import {Link, Route} from 'react-router-dom'

const MovieList = props => {
  const {movieList} = props;

  
  return (
    <div className="movie-list">
      {movieList.map(movie => {
        return <MovieDetails key={movie.id} movie={movie} />
      })}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, id } = movie;
  return (
    <>
    
    <div className="movie-card">
    <Link to = {`/movies/${id}`}><h2>{title}</h2></Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    <Route path = {`/movies/${id}`} />
    
    </>
  );
}

export default MovieList;
