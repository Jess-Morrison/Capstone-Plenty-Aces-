import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieData';
// import MovieCard from './movieCard';

export default function BtnFilter() {
  const [movies, setMovies] = useState({ });
  const [genreFilters, setGenreFilter] = useState([]);

  const getGenres = () => {
    getMovies().then((response) => {
      setMovies(response);
      setGenreFilter(response);
    });
  };

  useEffect(() => {
    getGenres();
  }, []);

  console.warn(movies);
  console.warn(genreFilters);

  return (
    <div>button</div>

  );
}
