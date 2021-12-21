import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD-ziyyceRAWFOQGX-IXEZuUweyqdUEhew",
  authDomain: "rce-be.firebaseapp.com",
  projectId: "rce-be",
  storageBucket: "rce-be.appspot.com",
  messagingSenderId: "50621837512",
  appId: "1:50621837512:web:2b1b817797404d1f9835fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };