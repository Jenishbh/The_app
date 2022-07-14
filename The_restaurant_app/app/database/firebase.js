// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {getAuth, OnAuthStateChanged} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxxx",
  authDomain: "xxxxx",
  projectId: "xxxxx",
  databaseURL: "xxxxxx",
  storageBucket: "xxxxxxx",
  messagingSenderId: "xxxxxx",
  appId: "xxxxxxx",
  measurementId: "xxxxxx"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}
const database = getDatabase(app)
const auth = getAuth(app)
const db = app.firestore()
//const analytics = getAnalytics(app);

export{ auth,database,db };
