// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ7bKfPMF8gMRY5tr1513DBwJPE05wbkY",
  authDomain: "login-register-8e339.firebaseapp.com",
  projectId: "login-register-8e339",
  storageBucket: "login-register-8e339.appspot.com",
  messagingSenderId: "369466910462",
  appId: "1:369466910462:web:9a41e5120a843d33d7a7af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
