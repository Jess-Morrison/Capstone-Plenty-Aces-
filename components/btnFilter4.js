import React, { useEffect, useState } from 'react';
// import { getAllProperties } from '../api/userPropertyData';
// import { useAuth } from '../utils/context/authContext';
// import PropertyCard from '../components/PropertyCard';
// import SearchComponent from './searchComponent';
import { getMovies } from '../api/movieData';
import MovieCard from './movieCard';

export default function BtnFilter4() {
  // const { user } = useAuth();

  const [movies, setMovies] = useState([]);
  // const [moviesForMap, setMoviesForMap] = useState([]);
  const [genresBtnFilters, setGenresBtnFilter] = useState([]);
  const [genresFilter, setGenresFilter] = useState([]);

  // console.warn(genresFilter);
  // console.warn(genresBtnFilters);

  const getBtnForMovies = () => {
    getMovies(movies.firebaseKey).then((item) => {
      setMovies(item);
      const genres = [];
      const filteredMovies = [];
      // console.warn(genres);
      item.forEach((movie) => {
        const genreType = movie?.movieGenre;
        const movieType = movie;
        if (genreType && !genres.includes(genreType)) {
          genres.push(genreType);
          // console.warn(genreType);
          // console.warn(movies.movieGenre);
        }
        if (movieType && !filteredMovies.includes(genres)) {
          filteredMovies.push(movieType);
          console.warn(filteredMovies);
        }
      });
      setGenresBtnFilter(genres);
    });
  };

  // const getMoviesForFilter = () => {
  //   getMovieByGenre(movies.firebaseKey).then((movieItems) => {
  //     setMovies(movieItems);
  //     const filteredMovies = [];
  //     console.warn(genres);
  //     movieItems.forEach((movieItem) => {
  //       const movieType = movieItem?.firebaseKey;
  //       if (movieType && !filteredMovies.includes(movieType)) {
  //         filteredMovies.push(movieType);
  //         console.warn(genreType);
  //         console.warn(movies.movieGenre);
  //       }
  //     });
  //     setMoviesForMap(filteredMovies);
  //     console.warn(filteredMovies);
  //   });
  // };

  // const movieSort = movies.sort(movies.movieGenre);
  // console.warn(movieSort);

  useEffect(() => {
    getBtnForMovies();
    // getMoviesForFilter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.warn(moviesForMap.movieGenre);

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

      <div style={{ margin: '5rem' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.movieGenre} movieObj={movie} onUpdate={getMovies} />
        ))}
      </div>;

      // if (movies.movieGenre === genresBtnFilters) {
      //   return (<MovieCard />
      //   );
      // }

      if (movies.includes('Musical') === genresFilter) {
        return movies.map((movie) => (
          <MovieCard
            key={movie.firebaseKey}
            movieObj={movie}
            onUpdate={getMovies}
          />
        ));
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
