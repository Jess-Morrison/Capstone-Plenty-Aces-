import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function PurchaseLocation({ movieObj }) {
  return (
    <Card>
      <h3>Purchase Location</h3>
      <Card.Body>{movieObj.purchaseLocation}</Card.Body>
    </Card>
  );
}

PurchaseLocation.propTypes = {
  movieObj: PropTypes.shape({
    purchaseLocation: PropTypes.string,
  }).isRequired,
};
