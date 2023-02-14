import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default {
  GoogleLogar: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = firebase.auth().signInWithPopup(provider);

    return result;
  },
};
