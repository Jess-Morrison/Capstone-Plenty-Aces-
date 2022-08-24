import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function MovieDescription({ movieObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Description:</Card.Title>
        <Card.Text>
          {movieObj.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

MovieDescription.propTypes = {
  movieObj: PropTypes.shape({
    description: PropTypes.string,
    purchaseLocation: PropTypes.string,
  }).isRequired,
};
