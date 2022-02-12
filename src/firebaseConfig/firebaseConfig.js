import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB4XqFcf8_B4lpG1aRxXCVR_fE8l9LBjw8",
  authDomain: "spring3-1d297.firebaseapp.com",
  projectId: "spring3-1d297",
  storageBucket: "spring3-1d297.appspot.com",
  messagingSenderId: "20007034141",
  appId: "1:20007034141:web:ebed1fd699e390af6155f4"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();
export {
  app,
  google,
  db
}