
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByaTnJwL82I_ELsOxX0U38u8sxxEfH9vQ",
  authDomain: "auth-dashboard-1758a.firebaseapp.com",
  projectId: "auth-dashboard-1758a",
  storageBucket: "auth-dashboard-1758a.appspot.com",
  messagingSenderId: "589924673429",
  appId: "1:589924673429:web:3dbefa7dce55f4e4c5b89c",
  measurementId: "G-MSQKKN6ZD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider  = new GoogleAuthProvider();

export {auth,provider};
