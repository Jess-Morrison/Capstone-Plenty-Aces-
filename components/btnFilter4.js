import React, { useEffect, useState } from 'react';
// import { getAllProperties } from '../api/userPropertyData';
// import { useAuth } from '../utils/context/authContext';
// import PropertyCard from '../components/PropertyCard';
// import SearchComponent from './searchComponent';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';

export default function BtnFilter() {
  // const { user } = useAuth();

  const [movies, setMovies] = useState([]);
  const [genresBtnFilters, setGenresBtnFilter] = useState([]);
  const [genresFilter, setGenresFilter] = useState({});

  // console.warn(genresFilter);

  const getMoviesforBtn = () => {
    getMovies().then((item) => {
      setMovies(item);
      const genres = [];
      // console.warn(genres);
      item.forEach((movie) => {
        const genreType = movie?.movieGenre;
        if (genreType && !genres.includes(genreType)) {
          genres.push(genreType);
          // console.warn(genreType);
        }
      });
      setGenresBtnFilter(genres);
    });
  };

  useEffect(() => {
    getMoviesforBtn();
  }, []);

  if (movies.movieGenre === genresBtnFilters) {
    return (<MovieCard />
    );
  }

  // eslint-disable-next-line consistent-return

  // eslint-disable-next-line consistent-return
  const renderGenresFilter = () => {
    if (genresBtnFilters.length > 0) {
      return genresBtnFilters.map((genresBtnFilter) => (
        <button
          key={`${genresBtnFilter}`}
          type="button"
          className="btn btn-secondary filterButton"
          onClick={() => setGenresFilter({ movieGenre: genresBtnFilter })}
          onUpdate={getMovies}
        >
          {genresBtnFilter}
        </button>

      ));
    }
    if (movies.length > 1 && movies.movieGenre === genresFilter) {
      // eslint-disable-next-line no-lone-blocks
      { movies.map(() => (
        <MovieCard
          key={movies.movieGenre}
          onUpdate={getMovies}
        />
      )); }
    }
    return null;
  };

  return (
    <>
      <div className="filterButtons">
        {renderGenresFilter()}
      </div>
    </>
  );
}
