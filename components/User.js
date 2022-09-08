/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

// *Stretch* add tag line and about me

export default function User({
  name, image,
}) {
  return (
    <Card className="userCard" style={{ width: '25rem', height: '40rem' }}>
      <Card.Header />
      <Card.Body>
        <Card.Img src={image} alt={name} style={{ borderRadius: '70%', width: '70%' }} />
        <Card.Body style={{ marginTop: '7rem' }}>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card.Body>
      <Card.Footer style={{ marginTop: '25rem' }} className="text-muted">Last Login: {Date().toLocaleString()}</Card.Footer>
    </Card>
  );
}

User.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

User.defaultProps = {
  name: 'Jess',
  image: 'https://image.shutterstock.com/image-photo/red-fox-animal-600w-789993919.jpg',
};
