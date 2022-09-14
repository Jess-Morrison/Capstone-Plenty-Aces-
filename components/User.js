/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

// *Stretch* add tag line and about me

export default function User({ userObj }) {
  // const { user } = useAuth();
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getUsers().then(setUsers);
  // }, []);

  return (
    <Card className="userCard" style={{ width: '25rem', height: '40rem' }}>
      <Card.Header />
      <Card.Body>
        <Card.Img className="userImage" src={userObj.photoURL} alt={userObj.displayName} style={{ borderRadius: '70%', width: '70%' }} />
        <Card.Body className="userName" style={{ marginTop: '7rem' }}>
          <Card.Title>{userObj.displayName}</Card.Title>
        </Card.Body>
      </Card.Body>
      <Card.Footer style={{ marginTop: '25rem' }} className="text-muted">Last Login: {Date().toLocaleString()}</Card.Footer>
    </Card>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
