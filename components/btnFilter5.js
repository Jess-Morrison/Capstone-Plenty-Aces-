import React, { useEffect, useState } from 'react';
import { getMovies } from '../api/movieData';
import { useAuth } from '../utils/context/authContext';

export default function BtnFilter5() {
  const [genreFilter, setGenreFilter] = useState([]);
  console.warn(genreFilter);

  const { user } = useAuth();

  useEffect(() => {
    if (user && user.uid) {
      getMovies(user.uid).then((data) => {
        const genreArr = [];

        data.forEach((movie) => {
          const propType = movie?.propertyType;
          if (propType && !genreArr.includes(propType)) {
            genreArr.push(propType);
          }
        });

        setGenreFilter(genreArr);
      });
    }
  }, [user]);

  return (genreFilter && genreFilter.length > 0 && genreFilter.map((genre) => <div>{genre}</div>));
}
