import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getMovies, getMovieComments } from '../api/movieData';
// import { getComments } from '../api/commentData';
import { deleteMovieComments } from '../api/mergedData';
// import UserCollection from '../pages/userCollection';
// import MovieDescription from './movieDescription';

export default function MovieCard({ movieObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisMovie = () => {
    if (window.confirm(`Delete ${movieObj.movieTitle}?`)) {
      getMovieComments(movieObj.firebaseKey).then(() => {
        deleteMovieComments(movieObj.firebaseKey).then(() => onUpdate(getMovies));
      });
    }
  };

  // eslint-disable-next-line consistent-return
  const btnsForUser = () => {
    // eslint-disable-next-line react/self-closing-comp
    if (user.uid === movieObj.uid && <Link passHref href="/userCollection"></Link>) {
      return (
        <>
          <Link href={`/movieEntry/edit/${movieObj.firebaseKey}`} passHref>
            <Button variant="info" className="m-2">EDIT</Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="danger" onClick={deleteThisMovie} className="m-2">
              DELETE
            </Button>
          </Link>
        </>
      );
    }
    return null;
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
      {btnsForUser()}
    </Card>
  );
}

MovieCard.propTypes = {
  // commentObj: PropTypes.shape({
  //   // firebaseKey: PropTypes.string,
  //   movieFirebaseKey: PropTypes.string,
  // }).isRequired,
  movieObj: PropTypes.shape({
    movieTitle: PropTypes.string,
    movieFirebaseKey: PropTypes.string,
    firebaseKey: PropTypes.string,
    movieGenre: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    purchaseLocation: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
