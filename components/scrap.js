// import React, { useEffect, useState } from 'react';
// import { getMovies } from '../api/movieData';
// import MovieCard from './movieCard';
// import SearchComponent from './searchComponent';

// export default function BtnFilter() {
//   const [movies, setMovies] = useState([]);
// const [sepMovies, setSepMovies] = useState([]);
// const [genresFilter, setGenresFilter] = useState([]);
// const [movieFilter, setMovieFilter] = useState({ movieGenre: genresFilter });

// useEffect(() => {
//   getMovies().then(setMovies);
// }, []);
// const movieValues = Object.values(movies);
// const movieArray = Object.entries(movieValues);
// console.warn(sepMovies);
// const newMovies = [];
// const mainMovie = (JSON.stringify(movies));
// newMovies.push(mainMovie);
// console.warn(movieFilter);
// const setFilterSearchName = (searchGenre) => {
//   setMovieFilter({ movieGenre: searchGenre });
// };

// Get Movie info and grabs genre data then puts it in a State
// const getMovieCardsGenres = () => {
//   getMovies().then(Object.values((response) => {
//     setSepMovies(response);
// setSepMovies(JSON.stringify(movies));
// const genres = [];
// console.warn(typeof response);
// const newMovies = [];
// response.forEach((movie) => {
//   const movieType = movie?.movieGenre;
// const mainMovie = movies;
// if (movieType && !genres.includes(movieType)) {
//   genres.push(movieType);
// }
// if (mainMovie) {
//   newMovies.push(mainMovie);
//   console.warn(newMovies);
// }
//     });
//     setGenresFilter(genres);
//   }));
// };

// useEffect(() => {
//   getMovieCardsGenres();
// }, []);

// Function that renders Movies to the DOM

// eslint-disable-next-line consistent-return
// const renderMovies = () => {
// const newMovies = [];
// const mainMovie = movies;
// newMovies.push(mainMovie);
// console.warn(newMovies.indexOf('movieGenre'));
// console.warn(newMovies);
// console.warn(typeof movies);
// console.warn(movies.movieGenre);
// console.warn(movieFilter);
// if (movies.length > 1) {
//   return movies.map((movie) => {
//     if (movie.movieGenre === movieFilter) {
//       return (
//         <MovieCard
//           key={`${movie.movieGenre}`}
//           movieObj={movie}
//           onUpdate={getMovies}
//         />
//       );
//     }
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

//       return null;
//     });
//   }
// };
// console.warn(movieFilter);

// Function that renders buttons to the DOM

// const renderGenresFilter = () => {
//   if (genresFilter.length > 0) {
//     return genresFilter.map((genreFilter) => (
//       <button
//         key={genreFilter}
//         type="button"
//         className="btn btn-secondary filterButton"
//         onClick={() => setMovieFilter({ movieGenre: genreFilter })}
//       >
//         {genreFilter}
//       </button>
//     ));
//   }
//   return null;
// };

//   return (
//     <>
//       <div className="filterButtons">
//         {renderGenresFilter()}
//       </div>
//       <div className="text-center my-4">
//         <SearchComponent onSearch={setFilterSearchName} className="searchFilterForm" />
//         <div className="d-flex flex-wrap">
//           {renderMovies()}
//         </div>
//       </div>
//     </>
//   );
// }
