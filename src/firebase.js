import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDBa2IugEpeE78IJLMGOGYuutKbFeL9-Iw",
    authDomain: "ecommerce-cb88f.firebaseapp.com",
    projectId: "ecommerce-cb88f",
    storageBucket: "ecommerce-cb88f.appspot.com",
    messagingSenderId: "710047866055",
    appId: "1:710047866055:web:94e8e5bbcef174297fb2e2"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

