import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCFDZh0yueQ-_bUN3p3hokRgMnUhSq6azQ",
  authDomain: "spring3-1d297.firebaseapp.com",
  projectId: "spring3-1d297",
  storageBucket: "spring3-1d297.appspot.com",
  messagingSenderId: "20007034141",
  appId: "1:20007034141:web:ebed1fd699e390af6155f4"
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();

export {
  app,
  google
}