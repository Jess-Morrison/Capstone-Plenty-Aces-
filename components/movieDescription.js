import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function MovieDescription({ movieObj }) {
  return (
    <Card className="descriptionCard" style={{ width: 'auto' }}>
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
