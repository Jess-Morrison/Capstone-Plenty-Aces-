import { deleteComment } from './commentData';
import { getMovieComments, getSingleMovie, deleteMovie } from './movieData';

const viewMovieDetails = (movieFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleMovie(movieFirebaseKey), getMovieComments(movieFirebaseKey)])
    .then(([movieObject, movieCommentsArray]) => {
      resolve({ ...movieObject, movies: movieCommentsArray });
    }).catch((error) => reject(error));
});

// const deleteMovieComments = (movieFirebaseKey, firebaseKey) => new Promise((resolve, reject) => {
//   getMovieComments(movieFirebaseKey).then((commentsArray) => {
//     const deleteCommentPromises = commentsArray.map((item) => deleteComment(item.movieFirebaseKey));
//     Promise.all(deleteCommentPromises).then(() => {
//       deleteMovie(firebaseKey).then(resolve);
//     });
//   }).catch((error) => reject(error));
// });

const deleteMovieComments = (movieFirebaseKey) => new Promise((resolve, reject) => {
  getMovieComments(movieFirebaseKey).then((commentsArray) => {
    const deleteCommentPromises = commentsArray.map((item) => deleteComment(item.firebaseKey));
    Promise.all(deleteCommentPromises).then(() => {
      deleteMovie(movieFirebaseKey).then((response) => resolve(response));
    });
  }).catch((error) => reject(error));
});

export { viewMovieDetails, deleteMovieComments };
