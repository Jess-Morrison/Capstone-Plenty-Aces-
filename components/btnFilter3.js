import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieData';
// import MovieCard from './movieCard';

export default function BtnFilter3() {
  // const [movies, setMovies] = useState({ });
  const [genreFilters, setGenreFilter] = useState([]);

  const getGenres = (movieGenre) => {
    getMovies(movieGenre).then((setGenreFilter));
  };

  useEffect(() => {
    getGenres();
  }, []);

  // console.warn(movies);
  console.warn(genreFilters);

  return (
    <div>button</div>

  );
}
