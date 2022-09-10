/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createComment, updateComment } from '../../api/commentData';

const initialState = {
  displayName: '',
  commentTitle: '',
  movieTitle: '',
  comment: '',
  dateCreated: '',
  firebaseKey: '',
  movieFirebaseKey: '',
};

export default function CommentForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) { setFormInput(obj); }
  }, [user, obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateComment(formInput).then(() => {
        setFormInput(initialState); router.push(`/movieEntry/${obj.movieFirebaseKey}`);
      });
    } else {
      const payload = {
        ...formInput, displayName: user.displayName, uid: user.uid, dateCreated: new Date().toLocaleString({ timeZone: 'UTC' }),
      };

      createComment(payload).then(() => {
        router.push('/userCollection');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ color: '#84190B', font: 'bold', 'font-size': '5rem' }} className="mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Comment</h2>
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="text" placeholder="Title" name="commentTitle" value={formInput.commentTitle} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Say what now?" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="text" placeholder="Comment" name="comment" value={formInput.comment} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Comment</Button>
    </Form>
  );
}

CommentForm.propTypes = {
  obj: PropTypes.shape({
    commentTitle: PropTypes.string,
    movieTitle: PropTypes.string,
    comment: PropTypes.string,
    dateCreated: PropTypes.string,
    firebaseKey: PropTypes.string,
    movieFirebaseKey: PropTypes.string,
  }),
};

CommentForm.defaultProps = {
  obj: initialState,
};
