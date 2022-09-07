// import React, { useEffect, useState } from 'react';
// import { getMovies } from '../api/movieData';
// import React from 'react';

// export default function BtnFilter() {
//   const [genreFilters, setGenreFilter] = useState([]);
//   const [filters, setFilter] = useState({ movieGenre: undefined });
//   const getMoviesObjs = (movieGenre) => {
//     getMovies(movieGenre).then((items) => {
//       const genres = [];
//       const genreItems = items.map((item) => item.movieGenre);
//       console.warn(genreItems);
//     });

//       useEffect(() => {
//         getMoviesObjs();
//       }, []);
//   };
// }
