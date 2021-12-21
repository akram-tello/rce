import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// the web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ziyyceRAWFOQGX-IXEZuUweyqdUEhew",
  authDomain: "rce-be.firebaseapp.com",
  projectId: "rce-be",
  storageBucket: "rce-be.appspot.com",
  messagingSenderId: "50621837512",
  appId: "1:50621837512:web:2b1b817797404d1f9835fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize storage service
const storage = firebase.storage();
// Initialize firestore service
const firestore = firebase.firestore();

export { storage, firestore };