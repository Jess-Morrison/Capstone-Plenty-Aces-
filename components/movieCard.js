import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteMovie, getMovies } from '../api/movieData';

export default function MovieCard({ movieObj, onUpdate }) {
  const deleteThisMovie = () => {
    if (window.confirm(`Delete ${movieObj.movieTitle}?`)) {
      deleteMovie(movieObj.firebaseKey).then(() => onUpdate(getMovies));
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieObj.imageURL} alt={movieObj.movieTitle} />
      <Card.Body>
        <Card.Title>{movieObj.movieTitle}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{movieObj.movieGenre}</ListGroup.Item>
      </ListGroup>
      <Link href={`/movieEntry/${movieObj.firebaseKey}`} passHref>
        <Button variant="primary" className="m-2">VIEW</Button>
      </Link>
      <Link href={`/movieEntry/edit/${movieObj.firebaseKey}`} passHref>
        <Button variant="info">EDIT</Button>
      </Link>
      <Link href="/userCollection" passHref>
        <Button variant="danger" onClick={deleteThisMovie} className="m-2">
          DELETE
        </Button>
      </Link>
    </Card>
  );
}

MovieCard.propTypes = {
  movieObj: PropTypes.shape({
    movieTitle: PropTypes.string,
    firebaseKey: PropTypes.string,
    movieGenre: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    purchaseLocation: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
