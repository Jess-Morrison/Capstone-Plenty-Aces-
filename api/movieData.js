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
    .catch((error) => reject(error));
});

// Delete movie
const deleteMovie = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/movies/${firebaseKey}.json`, uid)
    .then(() => {
      getMovies(uid).then((moviesArray) => resolve(moviesArray));
    })
    .catch((error) => reject(error));
});

const createMovie = (movieObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/movies.json`, movieObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/movies/${response.data.name}.json`, payload);
      getMovies(movieObj).then(resolve);
    }).catch(reject);
});

// Update movie

const updateMovie = (movieObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/movies/${movieObj.firebaseKey}.json`, movieObj)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getMovieComments = (movieFirebaseKey) => new Promise((resolve, reject) => {
  // eslint-disable-next-line camelcase
  axios.get(`${dbUrl}/comments.json?orderBy="movieFirebaseKey"&equalTo="${movieFirebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getMovies,
  getSingleMovie,
  deleteMovie,
  createMovie,
  updateMovie,
  getMovieComments,
};
