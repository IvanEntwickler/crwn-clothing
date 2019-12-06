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

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch (error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'promt': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;