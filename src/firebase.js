import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXh9eLuxM7gNPujgEDVug8443B_OjXWV8",
  authDomain: "react-chatapp-4abda.firebaseapp.com",
  projectId: "react-chatapp-4abda",
  storageBucket: "react-chatapp-4abda.appspot.com",
  messagingSenderId: "248698031420",
  appId: "1:248698031420:web:d931b0392073ab59a52239",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
