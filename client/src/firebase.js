// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blogging-app-6d7e9.firebaseapp.com",
  projectId: "mern-blogging-app-6d7e9",
  storageBucket: "mern-blogging-app-6d7e9.appspot.com",
  messagingSenderId: "236355566028",
  appId: "1:236355566028:web:1bce6abc491e93c2ac0569"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);