import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// Get USERS

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

// Get single USER
const getSingleUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Delete USER
const deleteUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/users/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Create a new USER
const createUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name, uid: response.data.name };
      axios.patch(`${dbUrl}/users/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

// Update USER

const updateUser = (userObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/comments/${userObj.firebaseKey}.json`, userObj)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// Get USER By UID

const getUserByUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getMoviesByUID = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export {
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  createUser,
  getUserByUID,
  getMoviesByUID,

};
