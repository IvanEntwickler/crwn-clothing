import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMUews8J3HKuHSkHGqM4Y4ILS72eMtRis",
    authDomain: "crwn-db-ec09d.firebaseapp.com",
    databaseURL: "https://crwn-db-ec09d.firebaseio.com",
    projectId: "crwn-db-ec09d",
    storageBucket: "crwn-db-ec09d.appspot.com",
    messagingSenderId: "837299885128",
    appId: "1:837299885128:web:0fd3c06055a15fa0f9347d",
    measurementId: "G-K8LCDVJCGW"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'promt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;