// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6p0ZqoFVM9Eb_GJ0BeFKdyMXKmU4BsyE",
    authDomain: "auth-firebase-context-ta-e2c9c.firebaseapp.com",
    projectId: "auth-firebase-context-ta-e2c9c",
    storageBucket: "auth-firebase-context-ta-e2c9c.appspot.com",
    messagingSenderId: "235870876092",
    appId: "1:235870876092:web:f9db291fb64e1140637bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;