import React from 'react';
import MovieForm from '../components/forms/movieForm';

export default function NewMovie() {
  return (
    <div className="create-form" style={{ height: '45rem', padding: '10%' }}>
      <MovieForm />
    </div>
  );
}
