import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCX9Jqi8nm3SWKo0A942eVGalKMhb_z2ps",
  authDomain: "tave-todolist.firebaseapp.com",
  projectId: "tave-todolist",
  storageBucket: "tave-todolist.appspot.com",
  messagingSenderId: "223375390891",
  appId: "1:223375390891:web:18eb16e243512092001fee",
  measurementId: "G-QE9BVNFBYX"
};

export default firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();