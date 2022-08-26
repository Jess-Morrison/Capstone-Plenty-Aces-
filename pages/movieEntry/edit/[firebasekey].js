import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MovieForm from '../../../components/forms/movieForm';
import { getSingleMovie } from '../../../api/movieData';

export default function EditMovieEntry() {
  const [editMovieItem, setEditMovieItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMovie(firebaseKey).then(setEditMovieItem);
  }, [firebaseKey]);
  console.warn(editMovieItem);
  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <MovieForm obj={editMovieItem} />
    </div>
  );
}
