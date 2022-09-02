import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Link from 'next/link';
import { getMovies } from '../api/movieData';
import BtnFilter from '../components/btnFilter4';
import CollectionBar from '../components/collectionBar';
import MovieCard from '../components/movieCard';
// import { useAuth } from '../utils/context/authContext';

export default function UserCollection() {
  const [movies, setMovies] = useState([]);
  // const [movieGenres, setMovieGenres] = useState([]);
  // const { user } = useAuth();

  useEffect(() => {
    getMovies().then(setMovies);
  },
  []);
  // console.warn(movieGenres);

  return (
    <div className="text-center my-4">
      <div style={{ margin: '5rem' }}>
        <CollectionBar />
      </div>

      <BtnFilter />

      <div style={{ margin: '5rem' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />
        ))}
      </div>
      {/* <div className="d-flex flex-wrap" /> */}
      {/* <Link href={`/movieEntry/edit/${movieObj.firebaseKey}`} passHref>
        <Button variant="info">EDIT</Button>
      </Link>
      <Button variant="danger" onClick={deleteThisBook} className="m-2">
        DELETE
      </Button> */}
    </div>
  );
}
