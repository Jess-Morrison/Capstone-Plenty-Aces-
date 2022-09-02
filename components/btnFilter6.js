import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';
import SearchComponent from './searchComponent';

export default function BtnFilter() {
  const [movies, setMovies] = useState([]);
  // const [sepMovies, setSepMovies] = useState([JSON.stringify(movies)]);
  const [genresFilter, setGenresFilter] = useState([]);
  const [movieFilter, setMovieFilter] = useState({ movieGenre: genresFilter });

  // console.warn(genresFilter);
  // console.warn(movieFilter);
  console.warn(movies.toString());
  console.warn(JSON.stringify(movies));
  // setSepMovies = JSON.stringify(movies);
  // console.warn(setSepMovies);

  // const mainMovie = movies.push(movie)

  const setFilterSearchName = (searchGenre) => {
    setMovieFilter({ movieGenre: searchGenre });
  };

  // Get Movie info and grabs genre data then puts it in a State
  const getMovieCardsGenres = () => {
    getMovies().then((response) => {
      setMovies(response);
      const genres = [];

      response.forEach((movie) => {
        const movieType = movie?.movieGenre;
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

  // Function that renders Movies to the DOM

  // eslint-disable-next-line consistent-return
  const renderMovies = () => {
    if (movies.length > 1) {
      return movies.map((movie) => {
        if (!movieFilter.movieGenre) {
          return (
            <MovieCard
              key={`${movieFilter.movieGenre}`}
              movieObj={movie}
              onUpdate={getMovies}
            />
          );
        }

        if (movieFilter.movieGenre !== -1) {
          return (
            <MovieCard
              key={`${movieFilter.movieGenre}`}
              movieObj={movie}
              onUpdate={getMovies}
            />
          );
        }

        return null;
      });
    }
  };

  // Function that renders buttons to the DOM

  const renderGenresFilter = () => {
    if (genresFilter.length > 0) {
      return genresFilter.map((genreFilter) => (
        <button
          key={`${genreFilter}`}
          type="button"
          className="btn btn-secondary filterButton"
          onClick={() => setMovieFilter({ movieGenre: genreFilter })}
        >
          {genreFilter}
        </button>
      ));
    }
    return null;
  };

  return (
    <>
      <div className="filterButtons">
        {renderGenresFilter()}
      </div>
      <div className="text-center my-4">
        <SearchComponent onSearch={setFilterSearchName} className="searchFilterForm" />
        <div className="d-flex flex-wrap">
          {renderMovies()}
        </div>
      </div>
    </>
  );
}
