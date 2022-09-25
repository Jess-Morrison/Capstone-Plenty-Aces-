import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { deleteComment, getComments } from '../api/commentData';

export default function CommentCard({ commentObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisComment = () => {
    if (window.confirm(`Delete ${commentObj.commentTitle}?`)) {
      deleteComment(commentObj.firebaseKey).then(() => onUpdate(getComments));
    }
  };

  // eslint-disable-next-line consistent-return
  const btnsForUser = () => {
    if (user.uid === commentObj.uid) {
      return (
        <div className="commentBtns">
          <Link href={`/comment/edit/${commentObj.firebaseKey}`} passHref>
            <Button style={{ 'background-color': '#84190B' }} key={user.uid} variant="info" className="m-2">EDIT</Button>
          </Link>
          <Link href="/userCollection" passHref>
            <Button key={user.uid} variant="danger" onClick={deleteThisComment} className="m-2">
              DELETE
            </Button>
          </Link>
        </div>
      );
    }
  };

  return (
    <Card className="commentCard" style={{ width: 'auto' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '35px' }}>{commentObj.commentTitle}</Card.Title>
        <Card.Subtitle style={{ fontSize: '27px' }} className="mb-2 text-muted">{commentObj.displayName}</Card.Subtitle>
        <Card.Text>
          {commentObj.comment}
        </Card.Text>
        <Card.Text>
          {commentObj.dateCreated}
        </Card.Text>
        {btnsForUser()}
      </Card.Body>
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
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
