/* eslint-disable @next/next/no-img-element */
import React from 'react';
// import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';

// *Stretch* add tag line and about me

export default function User() {
  const { user } = useAuth();

  return (
    <Card className="userCard" style={{ width: '25rem', height: '40rem' }}>
      <Card.Header />
      <Card.Body>
        <Card.Img className="userImage" src={user.photoURL} alt={user.displayName} style={{ borderRadius: '70%', width: '70%' }} />
        <Card.Body className="userName" style={{ marginTop: '7rem' }}>
          <Card.Title>{user.displayName}</Card.Title>
        </Card.Body>
      </Card.Body>
      <Card.Footer style={{ marginTop: '25rem' }} className="text-muted">Last Login: {Date().toLocaleString()}</Card.Footer>
    </Card>
  );
}

// User.propTypes = {
//   userObj: PropTypes.shape({
//     name: PropTypes.string,
//     image: PropTypes.string,
//   }).isRequired,
// };
