// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/app';

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const { userCred } = userCredential;
//   })
//   .catch(error);

//   const signIn = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
//   };

// Create User with Email and Password
// firebase.auth().createUserWithEmailAndPassword(email, password)

// firebase.auth().signInWithEmailAndPassword(email, password)

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     const userCreate = {
//       uid: fbUser.uid,
//       userName: fbUser.displayName,
//       userImage: fbUser.photoURL,
// ...
// } else {
// User is signed out.
// ...
// }
// });
