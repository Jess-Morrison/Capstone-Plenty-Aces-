import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// Get Comments

const getComments = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/comments.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single comment
const getSingleComment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/comments/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Delete comment
const deleteComment = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/comments/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Create a new comment
const createComment = (commentObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/comments.json`, commentObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/comments/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// Update player

const updateComment = (commentObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/comments/${commentObj.firebaseKey}.json`, commentObj)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Get Comment By UID

const getCommentByUID = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movies.json?orderBy="uid"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getCommentByMovieFirebaseKey = (moviefirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/comments.json?orderBy="moviefirebaseKey"&equalTo="${moviefirebaseKey}"`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getComments,
  getSingleComment,
  deleteComment,
  updateComment,
  createComment,
  getCommentByUID,
  getCommentByMovieFirebaseKey,

};
