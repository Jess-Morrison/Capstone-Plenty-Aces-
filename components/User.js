/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

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
        <Card.Img className="userImage" src={userObj.photoURL} alt={userObj.displayName} style={{ borderRadius: '70%', width: 'auto' }} />
        <Card.Body className="userName" style={{ marginTop: '2rem' }}>
          <Card.Title>{userObj.displayName}</Card.Title>
          <Card.Title>{userObj.tagLine}</Card.Title>
          <Card.Title>{userObj.aboutMe}</Card.Title>
        </Card.Body>
      </Card.Body>
      <Card.Footer style={{ marginTop: '25rem' }} className="text-muted">Last Login: {Date().toLocaleString()}</Card.Footer>
      <Link href={`/userFViewandEdit/${userObj.uid}`} passHref>
        <Button variant="primary" className="viewCardBtn">VIEW</Button>
      </Link>
      <Link href="/newMovie" passHref>
        <Button variant="primary" className="viewCardBtn">New Movie</Button>
      </Link>
    </Card>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
    aboutMe: PropTypes.string,
    tagLine: PropTypes.string,
    firebaseKey: PropTypes.string,
    // userFirebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};
