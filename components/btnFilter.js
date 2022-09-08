import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';
import SearchComponent from './searchComponent';

export default function BtnFilter() {
  const [movies, setMovies] = useState([]);
  const [genresFilter, setGenresFilter] = useState([]);
  const [movieFilter, setMovieFilter] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);

  const setFilterSearchName = (searchGenre) => {
    setMovieFilter({ movieGenre: searchGenre });
  };

  // Get Movie info and grabs genre data then puts it in a State
  const getMovieCardsGenres = () => {
    // setSepMovies(movies);
    // console.warn(sepMovies);
    // setSepMovies(JSON.stringify(movies));
    const genres = [];
    // console.warn(typeof response);
    // const newMovies = [];
    movies.forEach((movie) => {
      const movieType = movie?.movieGenre;
      // const mainMovie = movies;
      if (movieType && !genres.includes(movieType)) {
        genres.push(movieType);
      }
      // if (mainMovie) {
      //   newMovies.push(mainMovie);
      //   console.warn(newMovies);
      // }
    });
    setGenresFilter(genres);
  };

  useEffect(() => {
    getMovieCardsGenres();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);

  // Function that renders Movies to the DOM

  // eslint-disable-next-line consistent-return
  const renderMovies = () => {
    if (movies.length) {
      return movies.map((movie) => {
        console.warn(movie.movieGenre);
        console.warn(movieFilter);
        if (movieFilter === null) {
          return (
            <MovieCard
              key={movie.firebaseKey}
              movieObj={movie}
              onUpdate={getMovies}
            />
          );
        }
        if (movie.movieGenre === movieFilter) {
          return (
            <MovieCard
              key={movie.firebaseKey}
              movieObj={movie}
              onUpdate={getMovies}
            />
          );
        }
        return null;
      });
    }
  };
  // console.warn(movieFilter);

  // Function that creates filter buttons

  const renderGenresFilter = () => {
    if (genresFilter.length > 0) {
      return genresFilter.map((genreFilter) => (
        <button
          key={genreFilter}
          type="button"
          style={{ margin: '5px', 'background-color': '#84190B' }}
          className="btn btn-secondary filterButton"
          onClick={() => setMovieFilter(genreFilter)}
        >
          {genreFilter}
        </button>
      ));
    }
    return null;
  };

  // Function that renders buttons to the DOM
  return (
    <>
      <div className="filterButtons">
        {renderGenresFilter()}
        <button
          type="button"
          className="btn btn-secondary filterButton"
          style={{ 'background-color': '#84190B' }}
          onClick={() => setMovieFilter(null)}
        >
          Clear
        </button>
      </div>

      {/* // *STRETCH* Function that renders search to the DOM */}
      <div className="text-center my-4">
        <SearchComponent onSearch={setFilterSearchName} className="searchFilterForm" />
        <div className="d-flex flex-wrap">
          {renderMovies()}
        </div>
      </div>
    </>
  );
}
