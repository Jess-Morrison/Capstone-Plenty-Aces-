import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// Get Movies

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single movie
const getSingleMovie = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Delete movie
const deleteMovie = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/movies/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createMovie = (movieObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/movies.json`, movieObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/movies/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// Update movie

const updateMovie = (movieObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/mvoies/${movieObj.firebaseKey}.json`, movieObj)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getMovies,
  getSingleMovie,
  deleteMovie,
  createMovie,
  updateMovie,
};
