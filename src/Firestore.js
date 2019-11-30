import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDaqYu1O66H2K5Vw1WJTTgoWMm31wXhqQg",
  authDomain: "portfolio-19d48.firebaseapp.com",
  databaseURL: "https://portfolio-19d48.firebaseio.com",
  projectId: "portfolio-19d48",
  storageBucket: "portfolio-19d48.appspot.com",
  messagingSenderId: "840421958928",
  appId: "1:840421958928:web:b6d98e25fe3716d7ba7195",
  measurementId: "G-R1G6CNNY38"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;