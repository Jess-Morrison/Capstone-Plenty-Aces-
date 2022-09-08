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
      <div className="userComp">
        <User />
      </div>
      {/* Stretch: display Top 5 movies  */}
      <div className="firstFive" style={{ width: '120%' }}>
        {movies.slice(0, 5).map((movie) => (
          <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />
        ))}
      </div>
      <div className="userCollection">
        <Link href="/userCollection" passHref>
          <Button style={{ width: '120%', 'background-color': '#84190B' }} variant="primary" className="m-2">View My Collection</Button>
        </Link>
      </div>
    </>
  );
}
