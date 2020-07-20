import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'
import SavedList from './Movies/SavedList';
import { Link, Route } from 'react-router-dom';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log(response.data)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div>
        
        <Link to = '/'>Home</Link>
        <Link to = '/movies'>Movie</Link>

        <Route exact path = '/' >
          <MovieList movieList = {movieList}/>
          </Route>
        <Route path = '/movies/:id' render={props => {
          const { id } = props.match.params;
          return(
            <div>
              The id = {id}
            </div>
          )
        }}></Route>
        
      
      </div>
    </div>
  );
};

export default App;
