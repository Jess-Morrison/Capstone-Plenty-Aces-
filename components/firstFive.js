import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';

export default function FirstFive() {
  const [movies, setMovies] = useState([]);
  // const [eachMovie, setEachMovie] = useState();
  const { user } = useAuth();

  useEffect(() => {
    getMovies().then(setMovies);
  },
  [user.uid]);

  const movieList = [];
  movies.forEach(((movie) => (
    movieList.push(movie)
  )));
  // setEachMovie(movieList);
  // console.warn(movieList);

  if (user.uid === movieList.uid) {
    return (
      <div className="firstFive" style={{ width: '120%' }}>
        {movies.slice(0, 5).map((movie) => (
          <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />
        ))}
      </div>
    );
  }
  return null;
}
