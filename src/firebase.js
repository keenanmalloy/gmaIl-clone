import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzX64TUOiechK3LZvjVfpZn1faKi5tBss",
  authDomain: "clone-5a9e5.firebaseapp.com",
  projectId: "clone-5a9e5",
  storageBucket: "clone-5a9e5.appspot.com",
  messagingSenderId: "188739578900",
  appId: "1:188739578900:web:5ab6ce6f450122db3acb01",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
