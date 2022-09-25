/* eslint-disable array-callback-return */
// import React, { useState, useEffect } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import User from '../components/User';
// import MovieCard from '../components/movieCard';
// import { getMovies } from '../api/movieData';
import FirstFive from '../components/firstFive';
// import { useAuth } from '../utils/context/authContext';
// import { getUserByUID } from '../api/userData';

export default function UserProfile() {
  // const [users, setUsers] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const { user } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   getMovies().then(setMovies);
  // getUserByUID().then(setUsers);
  // },
  // []);

  // const grabFirstFive = () => {
  //   movies.slice(0, 5).map((movie) => {
  // if (user.uid === movies.uid) {
  // return (
  // <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />;
  // );
  // }
  // return null;
  //   });
  // };

  //  {movies.slice(0, 5).map((movie) => (
  //         <MovieCard key={movie.firebaseKey} movieObj={movie} onUpdate={getMovies} />
  //       ))}

  return (
    <>
      <div className="userComp">
        {/* {users.map((user) => ( */}
        <User />
        {/* ))} */}
      </div>
      {/* Stretch: display Top 5 movies  */}
      <FirstFive />
      <div className="userCollection">
        <Link href="/userCollection" passHref>
          <Button style={{ width: '120%', 'background-color': '#84190B', 'border-color': '#84190B' }} variant="primary" className="m-2">View My Collection</Button>
        </Link>
      </div>
    </>
  );
}
