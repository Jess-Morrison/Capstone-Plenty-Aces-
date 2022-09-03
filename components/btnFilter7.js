import React, { useEffect, useState } from 'react';
import { getMovies, getMovieByGenre } from '../api/movieData';
import MovieCard from './movieCard';

export default function Btnfilter7() {
  const [movies, setMovies] = useState();
  const [genresFilter, setGenresFilter] = useState([]);
  const [movieFilter, setMovieFilter] = useState({ movieGenre: genresFilter });

  const getMovieCards = () => {
    getMovies().then((movieItem) => setMovies(movieItem));
  };

  const handleClick = () => {
    const value = movies.movieGenre;
    if (value === movieFilter) {
      getMovies().then((movieItem) => {
        setMovies(movieItem);
      });
    } else {
      getMovieByGenre(value).then((result) => {
        setMovies(result);
      });
    }
  };
  useEffect(() => {
    getMovieCards();
  }, []);

  const getMovieCardsGenres = () => {
    getMovies().then((response) => {
      setMovies(response);
      // console.warn(movies);
      // setSepMovies(JSON.stringify(movies));
      const genres = [];
      // console.warn(typeof response);
      // const newMovies = [];
      response.forEach((movie) => {
        const movieType = movie?.movieGenre;
        // const mainMovie = movies;
        if (movieType && !genres.includes(movieType)) {
          genres.push(movieType);
        }
      });
      setGenresFilter(genres);
    });
  };
  useEffect(() => {
    getMovieCardsGenres();
  }, []);

  const renderGenresFilter = () => {
    if (genresFilter.length > 0) {
      return genresFilter.map((genreFilter) => (
        <button
          key={genreFilter}
          type="button"
          className="btn btn-secondary filterButton"
          onClick={handleClick}
        >
          {genreFilter}
        </button>
      ));
    }
    return null;
  };

  return (
    <div className="filterButtons">
      {renderGenresFilter()}
    </div>
  );
}
