import React, { useEffect, useState } from 'react';
// import { getAllProperties } from '../api/userPropertyData';
import { useAuth } from '../utils/context/authContext';
// import PropertyCard from '../components/PropertyCard';
// import SearchComponent from './searchComponent';
import { getMovies } from '../api/movieData';

export default function BtnFilter() {
  const { user } = useAuth();

  const [, setMovies] = useState([]);
  const [genresBtnFilters, setGenresBtnFilter] = useState([]);
  const [genresFilter, setGenresFilter] = useState({});

  // const setFilterSearchName = (searchName) => {
  //   setPropertyFilter({ name: searchName, type: undefined });
  // };

  console.warn(genresFilter);

  const getMoviesforBtn = () => {
    getMovies().then((item) => {
      setMovies(item);
      const genres = [];
      console.warn(genres);
      item.forEach((movie) => {
        const propType = movie?.movieGenre;
        if (propType && !genres.includes(propType)) {
          genres.push(propType);
        }
      });
      setGenresBtnFilter(genres);
    });
  };

  useEffect(() => {
    getMoviesforBtn();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // eslint-disable-next-line consistent-return

  const renderGenresFilter = () => {
    if (genresBtnFilters.length > 0) {
      return genresBtnFilters.map((genresBtnFilter) => (
        <button
          key={`${genresBtnFilter}`}
          type="button"
          className="btn btn-secondary filterButton"
          onClick={() => setGenresFilter({ movieGenre: undefined })}
        >
          {genresBtnFilter}
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
    </>
  );
}
