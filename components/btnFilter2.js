// import React, { useEffect, useState } from 'react';
// import { getMovies } from '../api/movieData';
// import { getMovies } from '../api/movieData';
// import { useAuth } from '../utils/context/authContext';
// import React from 'react';
// import MovieCard from './movieCard';

// export default function BtnFilter() {
//   const [genreFilters, setGenreFilter] = useState([]);
//   const [filters, setFilter] = useState({ movieGenre: undefined });
//   const getMoviesObjs = (movieGenre) => {
//     getMovies(movieGenre).then((items) => {
//       const genres = [];
//       const genreItems = items.map((item) => item.movieGenre);
//       const nonDupeGenres = genreItems.forEach((item) => {
//         if (!genres.includes(item)) {
//           genreFilters.push(item);
//         }
//       });
//       console.warn(genreItems, nonDupeGenres);
// {
//   setMovies(item);
//   const genres = [];
//   console.warn(genreFilters);
//   genreFilters.forEach((genreFilter) => {
//     const propType = genreFilter;
//     if (propType && genreFilters.includes(propType)) {
//       genreFilters.push(propType);
//     }
//   });
//   setGenreFilter(genres);
//   });
// };

// useEffect(() => {
//   getMoviesObjs();
//   }, []);

//   if (genreFilters.length > 1) {
//     return genreFilters.map((genreFilter) => {
//       if (!filters.movieGenre) {
//         return (
//           <button
//             key={`${genreFilter}`}
//             type="button"
//             className="btn btn-secondary filterButton"
//             onClick={() => setFilter({ movieGenre: genreFilters, type: genreFilter })}
//           >
//             {genreFilter}
//           </button>
//         );
//       }

//       if (movies.movieGenre) {
//         return (
//           <MovieCard
//             key={movies.movieGenre}
//             movieObj={movies}
//             onUpdate={getMovies}
//           />
//         );
//       }

//       return null;
//     });
//   }

//   if (genreFilters.length > 0) {
//     return genreFilters.map((typeFilter) => (
//       <>
//         <button
//           key={`${typeFilter}`}
//           type="button"
//           className="btn btn-secondary filterButton"
//           onClick={() => setFilter({ movieGenre: genreFilters, type: typeFilter })}
//         >
//           {typeFilter}
//         </button>
//         <div className="filterButtons">
//           {BtnFilter()}
//         </div>
//       </>

//     ));
//   }
//   return null;
// }
// const [movies, setMovies] = useState([]);
// const [genreFilter, setGenreFilter] = useState({ movieGenre: undefined });

// const { user } = useAuth();

// const getMovieCards = () => {
//   getMovies(user.uid).then((data) => {
//     setMovies(data);
//     const types = [];

//     data.forEach((property) => {
//       const propType = property?.propertyType;
//       if (propType && !types.includes(propType)) {
//         types.push(propType);
//       }
//     });
//     setTypesFilter(types);
//   });
// };
// useEffect(() => {
//   getMovieCards();
// }, [user]);
