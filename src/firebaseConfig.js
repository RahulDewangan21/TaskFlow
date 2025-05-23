// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9pd99K1S9zTepIweFZc8mQFcqdw441XA",
  authDomain: "task-planner-f4f9f.firebaseapp.com",
  projectId: "task-planner-f4f9f",
  storageBucket: "task-planner-f4f9f.firebasestorage.app",
  messagingSenderId: "887776096658",
  appId: "1:887776096658:web:3f03636a2428b2c192d14b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);