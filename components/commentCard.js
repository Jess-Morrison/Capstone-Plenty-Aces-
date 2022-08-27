import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { deleteComment, getComments } from '../api/commentData';

export default function CommentCard({ commentObj, onUpdate }) {
  const deleteThisComment = () => {
    if (window.confirm(`Delete ${commentObj.commentTitle}?`)) {
      deleteComment(commentObj.firebaseKey).then(() => onUpdate(getComments));
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{commentObj.commentTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{commentObj.displayName}</Card.Subtitle>
        <Card.Text>
          {commentObj.comment}
        </Card.Text>
      </Card.Body>
      <Link href={`/comment/${commentObj.firebaseKey}`} passHref>
        <Button variant="primary" className="m-2">VIEW</Button>
      </Link>
      <Link href={`/comment/edit/${commentObj.firebaseKey}`} passHref>
        <Button variant="info" className="m-2">EDIT</Button>
      </Link>
      <Link href="/userCollection" passHref>
        <Button variant="danger" onClick={deleteThisComment} className="m-2">
          DELETE
        </Button>
      </Link>
    </Card>
  );
}

CommentCard.propTypes = {
  commentObj: PropTypes.shape({
    displayName: PropTypes.string,
    commentTitle: PropTypes.string,
    comment: PropTypes.string,
    dateCreated: PropTypes.string,
    firebaseKey: PropTypes.string,
    movieFirebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
