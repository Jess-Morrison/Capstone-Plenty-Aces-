import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CommentForm from '../../../components/forms/movieForm';
import { getSingleMovie } from '../../../api/movieData';
// import { viewMovieDetails } from '../../../api/mergedData';

export default function NewMovieComment() {
  const [newMovieComment, setNewMovieComment] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleMovie(firebaseKey).then(setNewMovieComment);
  }, [firebaseKey]);

  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm obj={newMovieComment} />
    </div>
  );
}
