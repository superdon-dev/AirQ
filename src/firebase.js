var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
const firebaseConfig = {
  apiKey: "AIzaSyDQ0raBoqcHEq2d7AsUlMqoOVa00iMbfhI",
  authDomain: "react-airq.firebaseapp.com",
  databaseURL: "https://react-airq.firebaseio.com",
  projectId: "react-airq",
  storageBucket: "react-airq.appspot.com",
  messagingSenderId: "779816587633",
  appId: "1:779816587633:web:134980c74c476a510626d0",
  measurementId: "G-8QZDF2JT68",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
