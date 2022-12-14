import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import User from '../../components/User';
import MovieCard from '../../components/movieCard';
import { getMovieByUID } from '../../api/movieData';
import { getSingleUser } from '../../api/userData';

export default function MultiUserProfile() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect((uid) => {
    getMovieByUID(uid).then(setMovies);
    getSingleUser(firebaseKey).then(setUsers);
  },
  [firebaseKey]);
  console.warn(users);

  if (users.firebaseKey === firebaseKey) {
    return (
      <>
        <div className="userComp">
          <User key={users.firebaseKey} userObj={users} />
        </div>
        {/* Stretch: display Top 5 movies  */}
        <div className="firstFive" style={{ width: '120%' }}>
          {movies.slice(0, 5).map((movie) => (
            <MovieCard key={movie.userFirebaseKey} movieObj={movie} onUpdate={getMovieByUID} />
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
  return null;
}
