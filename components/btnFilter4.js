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
  const [moviesForMap, setMoviesForMap] = useState([]);
  const [genresBtnFilters, setGenresBtnFilter] = useState([]);
  const [genresFilter, setGenresFilter] = useState([]);

  // console.warn(genresFilter);
  // console.warn(genresBtnFilters);

  const getBtnForMovies = () => {
    getMovies(movies.firebaseKey).then((item) => {
      setMovies(item);
      const genres = [];
      // console.warn(genres);
      item.forEach((movie) => {
        const genreType = movie?.movieGenre;
        if (genreType && !genres.includes(genreType)) {
          genres.push(genreType);
          // console.warn(genreType);
          console.warn(movies.movieGenre);
        }
      });
      setGenresBtnFilter(genres);
    });
  };

  useEffect((firebaseKey) => {
    getBtnForMovies();
    getMovies(firebaseKey).then(setMoviesForMap);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.warn(moviesForMap.movieGenre);

  // if (movies.movieGenre === genresFilter) {
  //   return (<MovieCard />
  //   );
  // }

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

        >
          {genresBtnFilter}
        </button>

      ));
    }
    // if (movies.movieGenre === genresBtnFilters) {
    //   return (<MovieCard />
    //   );
    // }

    if (movies.movieGenre === genresFilter) {
      // eslint-disable-next-line no-lone-blocks
      { movies.map((movie) => (
        <MovieCard
          key={movie.firebaseKey}
          movieObj={movie}
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
