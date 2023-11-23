// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBNhHz27hlLnTbWlJiNSS0SI5-rIl_9nPk",
//   authDomain: "clone-6e990.firebaseapp.com",
//   projectId: "clone-6e990",
//   storageBucket: "clone-6e990.appspot.com",
//   messagingSenderId: "64887063788",
//   appId: "1:64887063788:web:93243ab49822b32d8fd1c9",
//   measurementId: "G-5NEYBFS3LT",
// };

// const app = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = app.firestore();

// export { auth, db };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAS2u2M1gVET87SDZdLzHdFwEJrq6uklOk",
  authDomain: "react-clone-aee57.firebaseapp.com",
  projectId: "react-clone-aee57",
  storageBucket: "react-clone-aee57.appspot.com",
  messagingSenderId: "320952849953",
  appId: "1:320952849953:web:8e232d4b364d42bec27560",
  measurementId: "G-VYYW55EHRM",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
