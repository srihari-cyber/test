import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDqC5K-J78MltIAI_PRafH1IU70w7cfRpg",
    authDomain: "auth-dfa9d.firebaseapp.com",
    projectId: "auth-dfa9d",
    storageBucket: "auth-dfa9d.appspot.com",
    messagingSenderId: "584809535878",
    appId: "1:584809535878:web:7c6feffba935e90a0a3407"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();

  export const auth = firebase.auth()