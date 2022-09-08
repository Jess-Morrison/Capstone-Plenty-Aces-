import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function CollectionBar({ name }) {
  return (
    <Card>
      <Card.Body>{name} Collection</Card.Body>
    </Card>
  );
}

CollectionBar.propTypes = {
  name: PropTypes.string,
};

CollectionBar.defaultProps = {
  name: "Jess's",

};
