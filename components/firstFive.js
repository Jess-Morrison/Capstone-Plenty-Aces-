import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getMovieByUID, getMovies } from '../api/movieData';
import MovieCard from './movieCard';

export default function FirstFive() {
  const [eachMovies, setEachMovies] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getMovieByUID(user.uid).then(setEachMovies);
  },
  []);

  if (user.uid) {
    return (
      <div className="firstFive" style={{ width: '120%' }}>
        {eachMovies.slice(0, 5).map((eachMovie) => (
          <MovieCard key={eachMovie.firebaseKey} movieObj={eachMovie} onUpdate={getMovies} />
        ))}
      </div>
    );
  }
  return null;
}
