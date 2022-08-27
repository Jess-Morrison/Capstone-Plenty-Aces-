import React from 'react';
import CommentForm from '../components/forms/commentForm';

export default function NewComment() {
  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <CommentForm />
    </div>
  );
}
