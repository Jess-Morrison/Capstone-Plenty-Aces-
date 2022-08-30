import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CommentForm from '../../../components/forms/commentForm';
import { getSingleComment } from '../../../api/commentData';

export default function EditComment() {
  const [newMovieComment, setNewMovieComment] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleComment(firebaseKey).then(setNewMovieComment);
  }, [firebaseKey]);

  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm obj={newMovieComment} />
    </div>
  );
}
