import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CommentForm from '../../../components/forms/commentForm';
import { getSingleMovie } from '../../../api/movieData';

export default function NewMovieComment() {
  const [newMovie, setNewMovie] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMovie(firebaseKey).then(setNewMovie);
  }, [firebaseKey]);

  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm obj={newMovie} />
    </div>
  );
}
