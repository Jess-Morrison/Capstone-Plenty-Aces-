import React from 'react';
// import { useRouter } from 'next/router';
import CommentForm from '../../components/forms/commentForm';
// import { getMovies } from '../api/movieData';

export default function NewComment() {
  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm />
    </div>
  );
}
