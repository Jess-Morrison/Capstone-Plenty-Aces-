import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';
import SearchComponent from './searchComponent';

export default function BtnFilter() {
  const [movies, setMovies] = useState([]);
  // const [mainMovies, setMainMovies] = useState([]);
  // const [sepMovies, setSepMovies] = useState([]);
  const [genresFilter, setGenresFilter] = useState([]);
  const [movieFilter, setMovieFilter] = useState(null);

  useEffect(() => {
    getMovies().then(setMovies);
  }, []);
  const movieValues = Object.values(movies);
  const movieA = Object.values(movieValues);
  const movieA2 = Object.values(movieA);
  // console.warn(movieFilter);
  // console.warn(movieA2[0].movieGenre);

  // eslint-disable-next-line no-lone-blocks
  const items = [];
  movieA2.forEach((item) => items.push(item));
  // console.warn(movies);
  // console.warn(items.movieGenre);
  // console.warn(movies[0].movieGenre);
  // console.warn(sepMovies);
  // const newMovies = [];
  // const mainMovie = (JSON.stringify(movies));
  // newMovies.push(mainMovie);

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
        // console.warn(movies.movieGenre);
        // if (movieFilter.movieGenre !== -1) {
        //   return (
        //     <MovieCard
        //       key={`${movieFilter.movieGenre}`}
        //       movieObj={movie}
        //       onUpdate={getMovies}
        //     />
        //   );
        // }

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
          className="btn btn-secondary filterButton"
          onClick={() => setMovieFilter(genreFilter)}
        >
          {genreFilter}
        </button>
      ));
    }
    return null;
  };

  // Functin that renders buttons and search to the DOM
  return (
    <>
      <div className="filterButtons">
        {renderGenresFilter()}
        <button
          type="button"
          className="btn btn-secondary filterButton"
          onClick={() => setMovieFilter(null)}
        >
          clear
        </button>
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