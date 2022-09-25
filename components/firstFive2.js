import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';

export default function FirstFive2() {
  const [movies, setMovies] = useState([]);
  // const [eachMovie, setEachMovie] = useState();
  const { user } = useAuth();

  useEffect(() => {
    getMovies().then(setMovies);
  },
  [user.uid]);

  // const movieList = [];
  // movies.forEach(((movie) => (
  //   movieList.push(movie)
  // )));
  // setEachMovie(movieList);
  // console.warn(movieList);

  // if (movies.length) {
  //     return movies.map((movie) => {
  //       if (movieFilter === null && user.uid === movie.uid) {
  //         return (

  if (movies.length) {
    return movies.slice(0, 5).map((movie) => {
      if (user.uid) {
        <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />;
      }
      return null;
    });
  }
  return null;
}
