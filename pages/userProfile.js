import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import User from '../components/User';
import MovieCard from '../components/movieCard';
import { getMovies } from '../api/movieData';

export default function UserProfile() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(setMovies);
  },
  []);

  return (
    <>
      <User />
      <Link href="/userCollection" passHref>
        <Button variant="primary" className="m-2">View My Collection</Button>
      </Link>
      {/* Stretch: display Top 5 movies  */}
      <div style={{ margin: '5rem' }}>
        {movies.slice(0, 5).map((movie) => (
          <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />
        ))}
      </div>
    </>
  );
}
