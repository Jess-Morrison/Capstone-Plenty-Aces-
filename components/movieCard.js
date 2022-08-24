import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MovieCard({ movieObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieObj.imageURL} alt={movieObj.movieTitle} />
      <Card.Body>
        <Card.Title>{movieObj.movieTitle}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{movieObj.movieGenre}</ListGroup.Item>
      </ListGroup>
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
};
