// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import {getAuth, OnAuthStateChanged} from 'firebase/auth'
import {getDatabase} from 'firebase/database'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfQd6RrOpUvetDmvVC6WkeGMHWUPvfPRs",
  authDomain: "the-restaurant-50802.firebaseapp.com",
  databaseURL: "https://the-restaurant-50802-default-rtdb.firebaseio.com",
  projectId: "the-restaurant-50802",
  storageBucket: "the-restaurant-50802.appspot.com",
  messagingSenderId: "1005669049723",
  appId: "1:1005669049723:web:c754c2ab26ef43fccbc9de",
  measurementId: "G-21BBTQMJGL"
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
//const analytics = getAnalytics(app);

export{ auth,database };