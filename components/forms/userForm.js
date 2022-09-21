import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createUser, updateUser } from '../../api/userData';

const initialState = {
  name: '',
  displayName: '',
  tagLine: '',
  aboutMe: '',
  photoURL: '',
  firebaseKey: '',
};

export default function UserForm({ obj }) {
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
      updateUser(formInput).then(() => {
        setFormInput(initialState); router.push('/userProfile');
      });
    } else {
      const payload = {
        ...formInput, uid: user.uid,
      };

      createUser(payload).then(() => {
        router.push('/mainScreen');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ color: '#84190B', font: 'bold', 'font-size': '5rem' }} className="mt-5">{obj.firebaseKey ? 'Update' : 'Create'} User</h2>
      <FloatingLabel controlId="floatingInput1" label="What's your Name?" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="User Name" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="text" placeholder="User Name" name="displayName" value={formInput.displayName} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Tagline" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="text" placeholder="Tagline" name="tagLine" value={formInput.tagline} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Tell us about you!" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="text" placeholder="About Me" name="aboutMe" value={formInput.aboutMe} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="A cute pic" className="mb-3">
        <Form.Control style={{ padding: '4rem' }} type="url" placeholder="Enter an image url" name="photoURL" value={formInput.photoURL} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} User</Button>
    </Form>
  );
}

UserForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    displayName: PropTypes.string,
    tagLine: PropTypes.string,
    aboutMe: PropTypes.string,
    photoURL: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

UserForm.defaultProps = {
  obj: initialState,
};
