// import { initializeApp } from 'firebase/app'
// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB4-4nxFF9bYTcprEMu_lmwnfGue6EX2Z0",
  authDomain: "crwn-db-20f5d.firebaseapp.com",
  projectId: "crwn-db-20f5d",
  storageBucket: "crwn-db-20f5d.appspot.com",
  messagingSenderId: "1059938561266",
  appId: "1:1059938561266:web:b41359f0facede613c346b",
  measurementId: "G-EN0LYKQB9C"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }

  return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;