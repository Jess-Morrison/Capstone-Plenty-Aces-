import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { updateMovie, createMovie } from '../../api/movieData';

const initialState = {
  movieTitle: '',
  movieGenre: '',
  purchaseLocation: '',
  description: '',
  imageURL: '',
  firebaseKey: '',
};

export default function MovieForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey)setFormInput(obj);
  }, [obj, user]);

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
      updateMovie(formInput).then(() => router.push(`/userCollection/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createMovie(payload).then(() => {
        router.push('/userCollection');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Movie</h2>
      <FloatingLabel controlId="floatingInput1" label="Movie Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Movie Name" name="movieTitle" value={formInput.movieTitle} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Purchase Location" className="mb-3">
        <Form.Control type="text" placeholder="Enter Purchase location" name="purchaseLocation" value={formInput.purchaseLocation} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Movie Genre">
        <Form.Select
          aria-label="Movie Genre"
          name="movieGenre"
          onChange={handleChange}
          className="mb-3"
          required
        >
          <option value="">Horror</option>
          <option value="">Sci-Fi</option>
          <option value="">Action</option>
          <option value="">Romance</option>
          <option value="">Foreign Film</option>
          <option value="">Drama</option>
          <option value="">Comedy</option>
          <option value="">Thriller</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Movie Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter an image url" name="imageURL" value={formInput.imageURL} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Movie Description" className="mb-3">
        <Form.Control type="text" placeholder="Enter Movie Description" name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Movie</Button>
    </Form>
  );
}

MovieForm.propTypes = {
  obj: PropTypes.shape({
    movieTitle: PropTypes.string,
    movieGenre: PropTypes.string,
    purchaseLocation: PropTypes.string,
    description: PropTypes.string,
    imageURL: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

MovieForm.defaultProps = {
  obj: initialState,
};
